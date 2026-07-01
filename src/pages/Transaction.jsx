import { useEffect, useState } from "react";

const formatCurrency = (value) =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    }).format(value);

export default function Transactions() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const load = (key, type) => {
            const raw = localStorage.getItem(key);
            if (!raw) return [];
            try {
                const parsed = JSON.parse(raw);
                if (!Array.isArray(parsed)) return [];
                return parsed.map((e) => ({ ...e, type }));
            } catch {
                return [];
            }
        };

        const incomes = load("finance-income", "income");
        const expenses = load("finance-expenses", "expense");

        const merged = [...incomes, ...expenses].sort((a, b) => b.id - a.id);
        setEntries(merged);
    }, []);

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Transactions</p>
                <p className="text-sm text-slate-500">{entries.length} items</p>
            </div>

            {entries.length === 0 ? (
                <p className="text-sm text-slate-500">No transactions yet.</p>
            ) : (
                <ul className="space-y-3">
                    {entries.map((entry) => (
                        <li
                            key={entry.id}
                            className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 bg-white"
                        >
                            <div>
                                <p className="font-medium text-slate-800">{entry.description || (entry.type === 'income' ? 'Income' : 'Expense')}</p>
                                <p className="text-sm text-slate-500">{entry.category} • {entry.date}</p>
                            </div>
                            <p className={`font-semibold ${entry.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                                {entry.type === 'expense' ? '-' : ''}{formatCurrency(Math.abs(entry.amount))}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}