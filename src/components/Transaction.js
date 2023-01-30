import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      <div className="transaction-title">
        {transaction.text}{" "}
        <span>
          {sign}${numberWithCommas(Math.abs(transaction.amount))}
        </span>
      </div>
      <p className="category">{transaction.category}</p>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
    </li>
  );
};

export default Transaction;
