import React from "react";
import { numberWithCommas } from "../utils/format";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${numberWithCommas(Math.abs(transaction.amount))}
      </span>
      <button
        // onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
    </li>
  );
};

export default Transaction;
