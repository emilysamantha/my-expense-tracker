import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const TodaysExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const todaysExpenses = (
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, amount) => (acc += parseFloat(amount)), 0) * -1
  ).toFixed(2);

  return (
    <div className="box-container">
      <i class="fa-solid fa-calendar-day"></i>
      <div>
        <h2>Today's Expenses</h2>
        <h2 id="money-minus" className="money minus">
          -${numberWithCommas(todaysExpenses)}
        </h2>
      </div>
    </div>
  );
};

export default TodaysExpenses;
