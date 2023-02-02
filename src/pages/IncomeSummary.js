import React, { useContext, useState } from "react";
import Header from "../components/Header";
import Total from "../components/Total";
import ToggleButton from "../components/ToggleButton";
import { GlobalContext } from "../context/GlobalState";
import TransactionList from "../components/TransactionList";

const IncomeSummary = () => {
  // Get current date
  let currentDate = new Date();

  const { transactions, theme } = useContext(GlobalContext);
  const [chosenDate, setChosenDate] = useState(currentDate);
  const [option, setOption] = useState("all");

  // Function to decrease month
  function decMonth() {
    let dateDec = new Date(chosenDate);
    dateDec.setMonth(dateDec.getMonth() - 1);
    setChosenDate(dateDec);
  }

  // Function to increase month
  function incMonth() {
    let dateInc = new Date(chosenDate);
    dateInc.setMonth(dateInc.getMonth() + 1);
    setChosenDate(dateInc);
  }

  // Function to return this month's transactions
  const monthTransactions = transactions.filter(
    (transaction) =>
      transaction.date.getMonth() === chosenDate.getMonth() &&
      transaction.date.getFullYear() === chosenDate.getFullYear()
  );

  return (
    <div
      className={
        theme === "light" ? "main-container light" : "main-container dark"
      }
    >
      <div className="header">
        <Header title="Income Summary" />
        <ToggleButton />
      </div>
      <div className="month-picker">
        <i class="fa-solid fa-chevron-left" onClick={() => decMonth()}></i>
        <h4>{chosenDate.toLocaleString("default", { month: "long" })}</h4>
        <i class="fa-solid fa-chevron-right" onClick={() => incMonth()}></i>
      </div>
      <div className="container">
        <Total
          title="Total Income"
          calculate="income"
          month={chosenDate.getMonth()}
          year={chosenDate.getFullYear()}
        />
        <div className="option-picker">
          <div
            className={option === "all" ? "option-picked" : ""}
            onClick={() => setOption("all")}
          >
            All
          </div>
          <div
            className={option === "categories" ? "option-picked" : ""}
            onClick={() => setOption("categories")}
          >
            Categories
          </div>
        </div>
        <TransactionList transactions={monthTransactions} />
      </div>
    </div>
  );
};

export default IncomeSummary;
