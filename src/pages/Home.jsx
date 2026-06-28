import Transactions from "./Transaction";
import Income from "./Income";
import Expenses from "./Expenses";
import Budgets from "./Budgets";
import Charts from "./Charts";

function Home() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
          Overview
        </p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Your finance dashboard</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          A simple homepage layout that brings your transactions, income, expenses,
          budgets, and charts together in one view.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 p-6 shadow-sm">
          <Transactions />
        </section>
        <section className="rounded-2xl border border-slate-200 p-6 shadow-sm">
          <Income />
        </section>
        <section className="rounded-2xl border border-slate-200 p-6 shadow-sm">
          <Expenses />
        </section>
        <section className="rounded-2xl border border-slate-200 p-6 shadow-sm">
          <Budgets />
        </section>
      </div>

      <section className="rounded-2xl border border-slate-200 p-6 shadow-sm">
        <Charts />
      </section>
    </div>
  );
}

export default Home;
