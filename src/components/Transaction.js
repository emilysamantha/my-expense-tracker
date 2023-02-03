import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction, theme, setShow, setCmPosition } =
    useContext(GlobalContext);

  return (
    <li
      className={
        transaction.amount < 0
          ? theme === "light"
            ? "minus light"
            : "minus dark"
          : theme === "light"
          ? "plus light"
          : "plus dark"
      }
      // Custom context menu to edit and delete transaction
      onContextMenu={(e) => {
        e.preventDefault();
        setCmPosition({ top: e.pageY, left: e.pageX });
        setShow(true);
      }}
    >
      <div className="transaction-title">
        {transaction.text}{" "}
        <span className={transaction.amount < 0 ? "minus" : "plus"}>
          {sign}${numberWithCommas(Math.abs(transaction.amount).toFixed(2))}
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
