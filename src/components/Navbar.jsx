import { NavLink } from "react-router-dom";

const Navbar = () => {
    const linkClass = ({ isActive }) =>
        `text-sm font-medium transition ${isActive ? "text-green-600" : "text-slate-700 hover:text-green-600"}`;

    return (
        <nav className="border-b border-gray-300 px-8 py-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h1 className="text-4xl text-green-500 font-bold">Kenki</h1>
                <div className="flex flex-wrap gap-4">
                    <NavLink to="/transactions" className={linkClass}>Transactions</NavLink>
                    <NavLink to="/income" className={linkClass}>Income</NavLink>
                    <NavLink to="/expenses" className={linkClass}>Expenses</NavLink>
                    <NavLink to="/budgets" className={linkClass}>Budgets</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;