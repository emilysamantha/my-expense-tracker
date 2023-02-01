import "./App.css";
import React, { useContext } from "react";
import Header from "./components/Header";
import ToggleButton from "./components/ToggleButton";
import Total from "./components/Total";
import IncomeExpenses from "./components/IncomeExpenses";
import TodaysExpenses from "./components/TodaysExpenses";
import Button from "./components/Button";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalContext } from "./context/GlobalState";

function App() {
  const { theme } = useContext(GlobalContext);
  return (
    <div
      className={
        theme === "light" ? "main-container light" : "main-container dark"
      }
    >
      <div className="header">
        <Header title="Expense Tracker" />
        <ToggleButton />
      </div>

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
