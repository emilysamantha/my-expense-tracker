import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const DateBorder = ({ date }) => {
  const { theme } = useContext(GlobalContext);

  const todayDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(todayDate.getDate() - 1);

  let dayText = "";

  // Getting dayText
  if (date.toDateString() === todayDate.toDateString()) {
    dayText = "Today";
  } else if (date.toDateString() === yesterdayDate.toDateString()) {
    dayText = "Yesterday";
  } else {
    dayText = date.toLocaleString("en-us", { weekday: "long" });
  }

  // Getting full date
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
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
