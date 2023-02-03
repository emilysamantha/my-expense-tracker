import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TransContextMenu = () => {
  const { deleteTransaction, theme, cmPosition, transClicked } =
    useContext(GlobalContext);
  return (
    <div
      className={
        theme === "light"
          ? "context-menu-container light"
          : "context-menu-container dark"
      }
      style={{ top: cmPosition.top, left: cmPosition.left }}
    >
      <ul className="context-menu-list">
        <li>Edit</li>
        <li onClick={() => deleteTransaction(transClicked)}>Delete</li>
      </ul>
    </div>
  );
};

export default TransContextMenu;
