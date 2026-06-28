import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Transactions from "./pages/Transaction";
import Income from "./pages/Income";
import Expenses from "./pages/Expenses";
import Budgets from "./pages/Budgets";
import Charts from "./pages/Charts";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1 px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
