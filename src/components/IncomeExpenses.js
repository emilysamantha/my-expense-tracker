import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  // Get current month's amounts
  const amounts = [];
  // Get current month
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  for (let i = 0; i < transactions.length; i++) {
    if (
      transactions[i].date.toLocaleString("default", { month: "long" }) ===
      currentMonth
    ) {
      amounts.push(transactions[i].amount);
    } else {
      break;
    }
  }

  // Calculate positive amounts for income
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => (acc += parseFloat(amount)), 0)
    .toFixed(2);

  // Calculate negative amounts for expenses
  const expenses = (
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, amount) => (acc += parseFloat(amount)), 0) * -1
  ).toFixed(2);

  return (
    <div>
      <h4 className="month">{currentMonth}</h4>
      <div className="box-container inc-exp">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            +${numberWithCommas(income)}
          </p>
        </div>
        <div>
          <h4>Expenses</h4>
          <p id="money-minus" className="money minus">
            -${numberWithCommas(expenses)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
