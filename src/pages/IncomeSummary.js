import React, { useContext } from "react";
import Header from "../components/Header";
import ToggleButton from "../components/ToggleButton";
import { GlobalContext } from "../context/GlobalState";

const IncomeSummary = () => {
  const { theme } = useContext(GlobalContext);
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
    </div>
  );
};

export default IncomeSummary;
