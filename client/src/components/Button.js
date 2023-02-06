import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const Button = ({ icon, title, page }) => {
  const { theme } = useContext(GlobalContext);
  return (
    <Link
      to={page}
      className={
        theme === "light"
          ? "box-container button light"
          : "box-container button dark"
      }
    >
      <i class={`${icon} btn-icon`}></i>
      <p>{title}</p>
      <i class="fa-solid fa-chevron-right"></i>
    </Link>
  );
};

export default Button;
