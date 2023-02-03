import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Category = ({ transactions, category, incExp }) => {
  const { theme } = useContext(GlobalContext);
  const [clicked, setClicked] = useState(false);
  const sign = incExp === "inc" ? "" : "-";

  function handleClick() {
    setClicked(!clicked);
  }

  function getRows() {
    const rows = transactions
      .filter(
        (transaction) => String(transaction.category).toLowerCase() === category
      )
      .map((transaction) => (
        <li
          className={
            theme === "light"
              ? incExp === "inc"
                ? "light plus"
                : "light minus"
              : incExp === "inc"
              ? "dark plus"
              : "dark minus"
          }
        >
          <p>{transaction.text}</p>
          <p className={incExp === "inc" ? "plus" : "minus"}>
            {sign}${numberWithCommas(Math.abs(transaction.amount).toFixed(2))}
          </p>
        </li>
      ));
    return rows;
  }

  // Calculate category amount
  const categoryAmount = transactions
    .filter(
      (transaction) => String(transaction.category).toLowerCase() === category
    )
    .reduce((acc, transaction) => (acc += parseFloat(transaction.amount)), 0);

  return (
    <div>
      <li className={theme === "light" ? "light" : "dark"}>
        <div
          className={
            clicked ? "category-container clicked" : "category-container"
          }
        >
          <p>
            <b>{category}</b>{" "}
          </p>
          <div className="category-right" onClick={handleClick}>
            <b>
              <p>${numberWithCommas(Math.abs(categoryAmount).toFixed(2))}</p>
            </b>
            <i
              class={
                clicked ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"
              }
            ></i>
          </div>
        </div>
      </li>
      {clicked && <ul className="category-rows-list">{getRows()}</ul>}
    </div>
  );
};

export default Category;
