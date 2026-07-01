import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const monthlyData = [
  { month: "Jan", income: 4200, expense: 2750 },
  { month: "Feb", income: 3800, expense: 3050 },
  { month: "Mar", income: 4550, expense: 3300 },
  { month: "Apr", income: 4900, expense: 2900 },
  { month: "May", income: 5300, expense: 3500 },
  { month: "Jun", income: 5000, expense: 3700 },
];

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export default function Charts() {
  const totalIncome = monthlyData.reduce((sum, item) => sum + item.income, 0);
  const totalExpense = monthlyData.reduce((sum, item) => sum + item.expense, 0);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
              Income vs Expenses
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Monthly Comparison</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Compare monthly income and expenses with a generated Recharts bar chart.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Income total</p>
              <p className="mt-2 text-2xl font-semibold text-emerald-600">
                {formatCurrency(totalIncome)}
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Expenses total</p>
              <p className="mt-2 text-2xl font-semibold text-rose-600">
                {formatCurrency(totalExpense)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-slate-900">Income vs Expense Chart</p>
            <p className="text-sm text-slate-500">
              This chart uses Recharts to show income and expenses side-by-side each month.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <span className="inline-block h-3 w-3 rounded-full bg-emerald-500" /> Income
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <span className="inline-block h-3 w-3 rounded-full bg-rose-500" /> Expense
            </div>
          </div>
        </div>

        <div className="h-105 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis tickFormatter={(value) => `$${value / 1000}k`} width={48} />
              <Tooltip formatter={(value) => formatCurrency(value)} />
              <Legend verticalAlign="top" align="right" height={36} />
              <Bar dataKey="income" name="Income" fill="#16a34a" radius={[8, 8, 0, 0]} />
              <Bar dataKey="expense" name="Expense" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
