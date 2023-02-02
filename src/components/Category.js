import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Category = ({ transactions, category, month, year }) => {
  const { theme } = useContext(GlobalContext);

  // Calculate category amount
  const categoryAmount = transactions
    .filter(
      (transaction) => String(transaction.category).toLowerCase() === category
    )
    .reduce((acc, transaction) => (acc += parseFloat(transaction.amount)), 0);

  return (
    <li className={theme === "light" ? "light" : "dark"}>
      <div className="category-container">
        <p>
          <b>{category}</b>{" "}
        </p>
        <div className="category-right">
          <p>${numberWithCommas(Math.abs(categoryAmount).toFixed(2))}</p>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </li>
  );
};

export default Category;
