import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Total from "../components/Total";
import ToggleButton from "../components/ToggleButton";
import { GlobalContext } from "../context/GlobalState";
import TransactionList from "../components/TransactionList";
import CategoriesList from "../components/CategoriesList";

const Summary = ({ incExp }) => {
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

  // Get this month's income
  const monthIncome = transactions.filter(
    (transaction) =>
      transaction.date.getMonth() === chosenDate.getMonth() &&
      transaction.date.getFullYear() === chosenDate.getFullYear() &&
      transaction.amount > 0
  );

  // Get this month's expense
  const monthExpense = transactions.filter(
    (transaction) =>
      transaction.date.getMonth() === chosenDate.getMonth() &&
      transaction.date.getFullYear() === chosenDate.getFullYear() &&
      transaction.amount < 0
  );

  return (
    <div
      className={
        theme === "light" ? "main-container light" : "main-container dark"
      }
    >
      <Link className="back-btn" to="/">
        <i class="fa-solid fa-chevron-left"></i> Back
      </Link>
      <div className="header">
        <Header
          title={incExp === "inc" ? "Income Summary" : "Expense Summary"}
        />
        <ToggleButton />
      </div>
      <div className="month-picker">
        <i class="fa-solid fa-chevron-left" onClick={() => decMonth()}></i>
        <h4>{chosenDate.toLocaleString("default", { month: "long" })}</h4>
        <i class="fa-solid fa-chevron-right" onClick={() => incMonth()}></i>
      </div>
      <div className="container">
        <Total
          title={incExp === "inc" ? "Total Income" : "Total Expense"}
          calculate={incExp === "inc" ? "income" : "expense"}
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
        {option === "all" && (
          <TransactionList
            transactions={incExp === "inc" ? monthIncome : monthExpense}
          />
        )}
        {option === "categories" && (
          <CategoriesList
            transactions={incExp === "inc" ? monthIncome : monthExpense}
            incExp={incExp}
          />
        )}
      </div>
    </div>
  );
};

export default Summary;
