import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const TodaysExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const todayAmounts = [];
  const currentDate = new Date();

  for (let i = 0; i < transactions.length; i++) {
    if (
      transactions[i].date.toDateString() === currentDate.toDateString() &&
      transactions[i].amount < 0
    ) {
      todayAmounts.push(transactions[i].amount);
    } else if (
      transactions[i].date.toDateString() !== currentDate.toDateString()
    ) {
      break;
    }
  }

  const todaysExpenses = (
    todayAmounts
      .filter((amount) => amount)
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
