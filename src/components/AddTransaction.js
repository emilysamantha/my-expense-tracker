import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  // Hooks
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState();
  const [showForm, setShowForm] = useState(false);

  // Set functions
  const toggleForm = () => {
    setShowForm(!showForm);
    setText("");
    setCategory("");
    setAmount();
  };

  // const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuidv4(),
      text: text,
      category: category,
      amount: +amount,
      date: new Date(),
    };

    console.log(newTransaction.date);

    addTransaction(newTransaction);
    toggleForm();
  };

  return (
    <div>
      {!showForm && (
        <div onClick={toggleForm} className="box-container button">
          <i class="fa-solid fa-plus icon"></i>
          <p>Add New Transaction</p>
        </div>
      )}

      {showForm && (
        <form onSubmit={onSubmit}>
          <h3>Add New Transaction</h3>
          <div className="form-control">
            <label htmlFor="text">
              <b>Title</b>
            </label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter title"
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">
              <b>Category</b>
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              <b>Amount</b> <br />
              (negative for expense, positive for income)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>
          <button className="btn">Add transaction</button>

          <p onClick={toggleForm}>Cancel</p>
        </form>
      )}
    </div>
  );
};

export default AddTransaction;
