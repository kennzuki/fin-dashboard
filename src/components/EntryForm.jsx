import { useEffect, useState } from "react";

function EntryForm({ type, title, subtitle }) {
  const storageKey = type === "income" ? "finance-income" : "finance-expenses";
  const emptyForm = { description: "", amount: "", date: "", category: "" };

  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    const savedEntries = localStorage.getItem(storageKey);
    if (savedEntries) {
      try {
        setEntries(JSON.parse(savedEntries));
      } catch {
        localStorage.removeItem(storageKey);
      }
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(entries));
  }, [entries, storageKey]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.description.trim() || !form.amount) {
      return;
    }

    const newEntry = {
      id: Date.now(),
      description: form.description.trim(),
      amount: Number(form.amount),
      date: form.date || new Date().toISOString().slice(0, 10),
      category: form.category.trim() || (type === "income" ? "Salary" : "General"),
    };

    setEntries((current) => [newEntry, ...current]);
    setForm(emptyForm);
  };

  const total = entries.reduce((sum, entry) => sum + entry.amount, 0);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
          {title}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">{subtitle}</h2>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            className="rounded-xl border border-slate-300 px-3 py-2"
            placeholder="Description"
          />
          <input
            name="amount"
            type="number"
            min="0"
            step="0.01"
            value={form.amount}
            onChange={handleChange}
            className="rounded-xl border border-slate-300 px-3 py-2"
            placeholder="Amount"
          />
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="rounded-xl border border-slate-300 px-3 py-2"
          />
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            className="rounded-xl border border-slate-300 px-3 py-2"
            placeholder="Category"
          />
          <div className="md:col-span-2">
            <button
              type="submit"
              className="rounded-xl bg-green-500 px-4 py-2 font-semibold text-white transition hover:bg-green-600"
            >
              Add {type}
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Recent {type}s</h3>
          <p className="text-sm font-medium text-slate-600">
            Total: ${total.toFixed(2)}
          </p>
        </div>

        {entries.length === 0 ? (
          <p className="text-sm text-slate-500">No {type}s added yet.</p>
        ) : (
          <ul className="space-y-3">
            {entries.map((entry) => (
              <li
                key={entry.id}
                className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3"
              >
                <div>
                  <p className="font-medium text-slate-800">{entry.description}</p>
                  <p className="text-sm text-slate-500">
                    {entry.category} • {entry.date}
                  </p>
                </div>
                <p className="font-semibold text-green-600">${entry.amount.toFixed(2)}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default EntryForm;
