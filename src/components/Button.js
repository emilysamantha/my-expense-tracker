import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Button = ({ icon, title }) => {
  const { theme } = useContext(GlobalContext);
  return (
    <a
      href="/"
      className={
        theme === "light"
          ? "box-container button light"
          : "box-container button dark"
      }
    >
      <i class={`${icon} btn-icon`}></i>
      <p>{title}</p>
      <i class="fa-solid fa-chevron-right"></i>
    </a>
  );
};

export default Button;
