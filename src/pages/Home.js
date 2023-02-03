import React, { useContext, useEffect } from "react";

import Header from "../components/Header";
import ToggleButton from "../components/ToggleButton";
import Total from "../components/Total";
import IncomeExpenses from "../components/IncomeExpenses";
import TodaysExpenses from "../components/TodaysExpenses";
import Button from "../components/Button";
import TransactionList from "../components/TransactionList";
import AddTransaction from "../components/AddTransaction";

import { GlobalContext } from "../context/GlobalState";
import TransContextMenu from "../menu/TransContextMenu";

const Home = () => {
  const { theme, transactions, show, setShow } = useContext(GlobalContext);

  const handleClick = () => setShow(false);

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      className={
        theme === "light" ? "main-container light" : "main-container dark"
      }
    >
      <div className="header">
        <Header title="Expense Tracker" />
        <ToggleButton on={theme === "light" ? true : false} />
      </div>

      <div className="exp-tracker-container">
        <div className="container">
          <Total title="Balance" calculate="balance" month={-1} year={-1} />
          <IncomeExpenses />
          <TodaysExpenses />
          <Button
            icon="fa-solid fa-money-bill-trend-up"
            title="View Income Summary"
            page="incomesummary"
          />
          <Button
            icon="fa-solid fa-money-bills"
            title="View Expense Summary"
            page="expensesummary"
          />
        </div>
        <div className="container">
          <AddTransaction />
          <br />
          <h3>Transaction History</h3>
          <TransactionList transactions={transactions} />
          {show && <TransContextMenu />}
        </div>
      </div>
    </div>
  );
};

export default Home;
