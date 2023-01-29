import React from "react";
import { numberWithCommas } from "../utils/format";

const TodaysExpenses = () => {
  return (
    <div className="box-container">
      <i class="fa-solid fa-calendar-day"></i>
      <div>
        <h2>Today's Expenses</h2>
        <h2 id="money-minus" className="money minus">
          -${numberWithCommas(500)}
        </h2>
      </div>
    </div>
  );
};

export default TodaysExpenses;
