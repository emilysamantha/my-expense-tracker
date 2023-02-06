import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Category from "./Category";

const CategoriesList = ({ transactions, incExp }) => {
  const { theme } = useContext(GlobalContext);

  // Function to get list of the unique categories from the given transactions
  function getUniqueCategories() {
    // Get all categories
    const allCategories = transactions.map((transaction) =>
      String(transaction.category).toLowerCase()
    );

    // Get unique categories
    const uniqueCategories = [...new Set(allCategories)];

    return uniqueCategories;
  }

  function getCategories() {
    const rows = getUniqueCategories().map((category) => (
      <Category
        transactions={transactions}
        category={category}
        incExp={incExp}
      />
    ));
    return rows;
  }

  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <ul className="categories-list">{getCategories()}</ul>
    </div>
  );
};

export default CategoriesList;
