import "./App.css";
import { Header } from "./components/Header";
import Total from "./components/Total";
import IncomeExpenses from "./components/IncomeExpenses";
import TodaysExpenses from "./components/TodaysExpenses";

function App() {
  return (
    <div>
      <Header title="Expense Tracker" />
      <div className="container">
        <Total title="Balance" />
        <IncomeExpenses />
        <TodaysExpenses />
      </div>
    </div>
  );
}

export default App;
