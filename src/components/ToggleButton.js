import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ToggleButton = () => {
  const { theme, toggleTheme } = useContext(GlobalContext);
  const onToggle = () => {
    toggleTheme(theme);
  };
  return (
    <div
      className={
        theme === "light" ? "toggle-container light" : "toggle-container dark"
      }
    >
      <i className="fa-solid fa-moon"></i>
      <div className="switch-checkbox">
        <label className="switch">
          <input type="checkbox" onChange={onToggle} />
          <span className="slider round"> </span>
        </label>
      </div>
      <i className="fa-solid fa-lightbulb"></i>
    </div>
  );
};

export default ToggleButton;
