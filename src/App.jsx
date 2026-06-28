import Navbar from "./components/Navbar";
import Transactions from "./pages/Transaction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1 px-8 py-8">
        <Transactions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
