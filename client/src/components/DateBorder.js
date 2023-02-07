import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const DateBorder = ({ date }) => {
  const { theme } = useContext(GlobalContext);

  const todayDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(todayDate.getDate() - 1);

  let dayText = "";

  const transDate = new Date(date);

  // Getting dayText
  if (transDate.toDateString() === todayDate.toDateString()) {
    dayText = "Today";
  } else if (transDate.toDateString() === yesterdayDate.toDateString()) {
    dayText = "Yesterday";
  } else {
    dayText = transDate.toLocaleString("en-us", { weekday: "long" });
  }

  // Getting full date
  const day = transDate.getDate();
  const month = transDate.toLocaleString("default", { month: "long" });
  const year = transDate.getFullYear();
  const fullDate = day + " " + month + " " + year;

  return (
    <div
      className={theme === "light" ? "date-border light" : "date-border dark"}
    >
      <p>
        <b>{dayText}</b>
      </p>
      <p>{fullDate}</p>
    </div>
  );
};

export default DateBorder;
