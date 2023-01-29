import React from "react";
import { numberWithCommas } from "../utils/format";

const IncomeExpenses = () => {
  return (
    <div>
      <br />
      <h4 className="month">January</h4>
      <div className="box-container inc-exp">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            +${numberWithCommas(1500)}
          </p>
        </div>
        <div>
          <h4>Expenses</h4>
          <p id="money-minus" className="money minus">
            -${numberWithCommas(500)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
