import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Total = ({ title }) => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts
    .reduce((acc, amount) => (acc += parseFloat(amount)), 0)
    .toFixed(2);

  return (
    <div>
      <h4>{title}</h4>
      <h1 id="balance">${numberWithCommas(total)}</h1>
    </div>
  );
};

export default Total;
