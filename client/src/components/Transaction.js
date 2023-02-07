import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";
import dateFormat from "dateformat";

const Transaction = ({ transaction }) => {
  // Get necessary global contexts
  const {
    theme,
    deleteTransaction,
    setShowCM,
    setCmPosition,
    setTransClicked,
    transClicked,
    showEdit,
    editTransaction,
    setShowEdit,
  } = useContext(GlobalContext);

  // Determine transaction sign
  const sign = transaction.amount < 0 ? "-" : "+";

  // Get date in "yyyy-MM-dd" format
  const dateString = dateFormat(new Date(transaction.date), "yyyy-mm-dd");

  // Hooks for edit form
  const [text, setText] = useState(transaction.text);
  const [category, setCategory] = useState(transaction.category);
  const [amount, setAmount] = useState(transaction.amount);
  const [date, setDate] = useState(dateString);

  // Edit form submit function
  function onSubmit(e) {
    e.preventDefault();
    const newDate = new Date(date);
    const editedTransaction = {
      ...transaction,
      text: text,
      category: category,
      amount: +amount,
      date: newDate,
    };
    editTransaction(editedTransaction);
    setShowEdit(false);
  }

  // Cancel edit function
  function cancelEdit() {
    setShowEdit(false);
    setText(transaction.text);
    setCategory(transaction.category);
    setAmount(transaction.amount);
    setDate(transaction.date);
  }

  return (
    <>
      {transClicked === transaction._id && showEdit && (
        <li className={theme === "light" ? "light" : "dark"}>
          <form onSubmit={onSubmit}>
            <h3>Edit Transaction</h3>
            <label htmlFor="text">
              <b>Title</b>
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter title"
            />
            <label htmlFor="category">
              <b>Category</b>
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
            />
            <label htmlFor="amount">
              <b>Amount</b>
            </label>
            <input
              type="number"
              step={0.01}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
            <label htmlFor="date">
              <b>Date</b>
            </label>
            <br />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Enter date"
            />
            <button className="btn">Edit transaction</button>
            <p onClick={cancelEdit}>Cancel</p>
          </form>
        </li>
      )}
      {!(transClicked === transaction._id && showEdit) && (
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
            setShowCM(true);
            setTransClicked(transaction._id);
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
            onClick={() => deleteTransaction(transaction._id)}
            className="delete-btn"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </li>
      )}
    </>
  );
};

export default Transaction;
