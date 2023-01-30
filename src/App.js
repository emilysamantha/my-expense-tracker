import "./App.css";
import { Header } from "./components/Header";
import Total from "./components/Total";
import IncomeExpenses from "./components/IncomeExpenses";
import TodaysExpenses from "./components/TodaysExpenses";
import Button from "./components/Button";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <div>
      <Header title="Expense Tracker" />
      <div className="exp-tracker-container">
        <div className="container">
          <Total title="Balance" />
          <IncomeExpenses />
          <TodaysExpenses />
          <Button
            icon="fa-solid fa-money-bill-trend-up"
            title="View Income Summary"
          />
          <Button icon="fa-solid fa-money-bills" title="View Expense Summary" />
        </div>
        <div className="container">
          <AddTransaction />
          <br />
          <TransactionList />
        </div>
      </div>
    </div>
  );
}

export default App;
