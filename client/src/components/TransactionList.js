import React, { useContext, useEffect } from "react";
import Transaction from "./Transaction";
import DateBorder from "./DateBorder";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = ({ transactions }) => {
  const { theme, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);

  function getRows() {
    const rows = [];
    let currentDate = new Date();
    // Set current date to the future first
    currentDate.setDate(currentDate.getDate() + 1);

    for (let i = 0; i < transactions.length; i++) {
      let transaction = transactions[i];

      // If current transaction date is different from previous one
      // Add date border
      if (
        new Date(transaction.date).toDateString() !==
        new Date(currentDate).toDateString()
      ) {
        rows.push(<DateBorder date={transaction.date} />);
      }

      // Set transaction date as current date
      currentDate = transaction.date;

      // Push transaction itself
      rows.push(<Transaction key={transaction.id} transaction={transaction} />);
    }
    return rows;
  }

  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <ul className="list">{getRows()}</ul>
    </div>
  );
};

export default TransactionList;
