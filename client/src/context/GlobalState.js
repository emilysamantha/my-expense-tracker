import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// import axios from "axios";

// Initial state
const currentDate = new Date();
const yesterdayDate = new Date();
yesterdayDate.setDate(currentDate.getDate() - 1);
const olderDate = new Date();
olderDate.setDate(currentDate.getDate() - 40);

const initialState = {
  transactions: [
    {
      id: 1,
      text: "Payment",
      category: "Transfer",
      amount: 1500,
      date: currentDate,
    },
    {
      id: 2,
      text: "Keyboard",
      category: "Shopping",
      amount: -200,
      date: currentDate,
    },
    {
      id: 3,
      text: "Book",
      category: "Shopping",
      amount: -20,
      date: yesterdayDate,
    },
    {
      id: 4,
      text: "Boba",
      category: "Food",
      amount: -8,
      date: yesterdayDate,
    },
    {
      id: 5,
      text: "Salary",
      category: "Income",
      amount: 2000,
      date: olderDate,
    },
  ],
  theme: "dark",
  showCM: false,
  cmPosition: { top: 0, left: 0 },
  transClicked: 0,
  showEdit: false,
  // error: null,
  // loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  // async function getTransactions() {
  // try {
  //   const res = await axios.get("/api/v1/transactions"); // Fetch transactions from the backend
  //   dispatch({
  //     type: "GET_TRANSACTIONS",
  //     payload: res.data.data,
  //   });
  // } catch (err) {
  //   dispatch({
  //     type: "TRANSACTION_ERROR",
  //     payload: err.response.data.error,
  //   });
  // }
  // }

  function deleteTransaction(id) {
    // try {
    //   await axios.delete(`/api/v1/transactions/${id}`);
    //   dispatch({
    //     type: "DELETE_TRANSACTION",
    //     payload: id,
    //   });
    // } catch (err) {
    //   dispatch({
    //     type: "TRANSACTION_ERROR",
    //     payload: err.response.data.error,
    //   });
    // }
    if (
      window.confirm("Are you sure you want to delete this transaction?") ===
      true
    ) {
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    }
  }

  function addTransaction(transaction) {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    // try {
    //   const res = await axios.post("api/v1/transactions", transaction, config);
    //   dispatch({
    //     type: "ADD_TRANSACTION",
    //     payload: res.data.data,
    //   });
    // } catch (err) {
    //   dispatch({
    //     type: "TRANSACTION_ERROR",
    //     payload: err.response.data.error,
    //   });
    // }
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function editTransaction(transaction) {
    dispatch({
      type: "EDIT_TRANSACTION",
      payload: transaction,
    });
  }

  function toggleTheme(theme) {
    dispatch({
      type: "TOGGLE_THEME",
      payload: theme,
    });
  }

  function setShowCM(showCM) {
    dispatch({
      type: "SET_SHOW_CM",
      payload: showCM,
    });
  }

  function setCmPosition(position) {
    dispatch({
      type: "SET_CM_POSITION",
      payload: position,
    });
  }

  function setTransClicked(id) {
    dispatch({
      type: "SET_TRANS_CLICKED",
      payload: id,
    });
  }

  function setShowEdit(show) {
    dispatch({
      type: "SET_SHOW_EDIT",
      payload: show,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        theme: state.theme,
        toggleTheme,
        showCM: state.showCM,
        setShowCM: setShowCM,
        cmPosition: state.cmPosition,
        setCmPosition,
        transClicked: state.transClicked,
        setTransClicked,
        showEdit: state.showEdit,
        setShowEdit,
        // error: state.error,
        // loading: state.loading,
        // getTransactions,
        deleteTransaction,
        addTransaction,
        editTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
