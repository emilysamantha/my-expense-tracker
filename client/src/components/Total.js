import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Total = ({ title, calculate, month, year }) => {
  const { transactions } = useContext(GlobalContext);
  let amounts = 0;
  let total = 0;

  if (month < 0) {
    amounts = transactions.map((transaction) => transaction.amount);
  } else {
    amounts = transactions
      .filter(
        (transaction) =>
          transaction.date.getMonth() === month &&
          transaction.date.getFullYear() === year
      )
      .map((transaction) => transaction.amount);
  }

  switch (calculate) {
    case "balance":
      total = amounts.reduce((acc, amount) => (acc += parseFloat(amount)), 0);

      break;
    case "income":
      total = amounts
        .filter((amount) => amount > 0)
        .reduce((acc, amount) => (acc += parseFloat(amount)), 0);

      break;
    case "expense":
      total = amounts
        .filter((amount) => amount < 0)
        .reduce((acc, amount) => (acc += parseFloat(amount)), 0);

      break;
    default:
      total = 0;
  }

  const sign = total < 0 ? "-" : "";

  return (
    <div>
      <h4>{title}</h4>
      <h1 id="balance">
        {sign}${numberWithCommas(Math.abs(total).toFixed(2))}
      </h1>
    </div>
  );
};

export default Total;
