import { useEffect, useState } from "react";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

function EntryCard({ title, entries, type }) {
  const total = entries.reduce((sum, entry) => sum + entry.amount, 0);
  const colorClass = type === "income" ? "text-emerald-600" : "text-rose-600";

  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            {title}
          </p>
          <p className="mt-2 text-2xl font-bold text-slate-900">
            Recent {title.toLowerCase()}
          </p>
        </div>
        <div className={`rounded-2xl bg-white px-4 py-3 text-right shadow-sm ${colorClass}`}>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Total</p>
          <p className="mt-1 text-xl font-semibold">{formatCurrency(total)}</p>
        </div>
      </div>

      {entries.length === 0 ? (
        <p className="text-sm text-slate-500">No {title.toLowerCase()} added yet.</p>
      ) : (
        <ul className="space-y-4">
          {entries.slice(0, 3).map((entry) => (
            <li
              key={entry.id}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-4"
            >
              <div>
                <p className="font-semibold text-slate-900">{entry.description}</p>
                <p className="text-sm text-slate-500">
                  {entry.category} • {entry.date}
                </p>
              </div>
              <p className={`font-semibold ${colorClass}`}>
                {formatCurrency(entry.amount)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function RecentEntries() {
  const [incomeEntries, setIncomeEntries] = useState([]);
  const [expenseEntries, setExpenseEntries] = useState([]);

  useEffect(() => {
    const loadEntries = (key) => {
      const saved = localStorage.getItem(key);
      if (!saved) return [];
      try {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed)
          ? parsed.sort((a, b) => b.id - a.id)
          : [];
      } catch {
        return [];
      }
    };

    setIncomeEntries(loadEntries("finance-income"));
    setExpenseEntries(loadEntries("finance-expenses"));
  }, []);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <EntryCard title="Income" entries={incomeEntries} type="income" />
      <EntryCard title="Expenses" entries={expenseEntries} type="expense" />
    </div>
  );
}
