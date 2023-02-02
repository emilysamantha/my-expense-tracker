import React, { useContext, useState } from "react";
import Header from "../components/Header";
import Total from "../components/Total";
import ToggleButton from "../components/ToggleButton";
import { GlobalContext } from "../context/GlobalState";

const IncomeSummary = () => {
  // Get current date
  let currentDate = new Date();

  const { theme } = useContext(GlobalContext);
  const [chosenDate, setChosenDate] = useState(currentDate);

  // Function to decrease month
  function decMonth() {
    let dateDec = new Date(chosenDate);
    dateDec.setMonth(dateDec.getMonth() - 1);
    setChosenDate(dateDec);
  }

  // Function to increase month
  function incMonth() {
    let dateInc = new Date(chosenDate);
    dateInc.setMonth(dateInc.getMonth() + 1);
    setChosenDate(dateInc);
  }

  return (
    <div
      className={
        theme === "light" ? "main-container light" : "main-container dark"
      }
    >
      <div className="header">
        <Header title="Income Summary" />
        <ToggleButton />
      </div>
      <div className="month-picker">
        <i class="fa-solid fa-chevron-left" onClick={() => decMonth()}></i>
        <h4>{chosenDate.toLocaleString("default", { month: "long" })}</h4>
        <i class="fa-solid fa-chevron-right" onClick={() => incMonth()}></i>
      </div>
      <div className="exp-tracker-container">
        <Total
          title="Total Income"
          calculate="income"
          month={chosenDate.getMonth()}
          year={chosenDate.getFullYear()}
        />
      </div>
    </div>
  );
};

export default IncomeSummary;
