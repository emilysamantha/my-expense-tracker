import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// import axios from "axios";

// Initial state
const currentDate = new Date();
const yesterdayDate = new Date();
yesterdayDate.setDate(currentDate.getDate() - 1);
const olderDate = new Date();
olderDate.setDate(currentDate.getDate() - 2);

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
      window.confirm("Are you sure you want to delete this transaction?") ==
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

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        // error: state.error,
        // loading: state.loading,
        // getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
