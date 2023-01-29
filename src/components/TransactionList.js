import React from "react";
import Transaction from "./Transaction";

const TransactionList = () => {
  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        <Transaction
          transaction={{ text: "Payment", amount: 1000, category: "Transfer" }}
        />
        <Transaction
          transaction={{ text: "Keyboard", amount: -200, category: "Shopping" }}
        />
      </ul>
    </div>
  );
};

export default TransactionList;
