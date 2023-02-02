import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Category from "./Category";

const CategoriesList = ({ transactions, month, year }) => {
  const { theme } = useContext(GlobalContext);

  function getCategories() {
    // Get all categories
    const allCategories = transactions.map((transaction) =>
      String(transaction.category).toLowerCase()
    );

    // Get unique categories
    const uniqueCategories = [...new Set(allCategories)];

    return uniqueCategories;
  }

  function getRows() {
    const rows = getCategories().map((category) => (
      <Category
        transactions={transactions}
        category={category}
        month={month}
        year={year}
      />
    ));
    return rows;
  }

  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <ul className="categories-list">{getRows()}</ul>
    </div>
  );
};

export default CategoriesList;
