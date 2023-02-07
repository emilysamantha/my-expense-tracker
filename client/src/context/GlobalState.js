import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  transactions: [],
  theme: "dark",
  showCM: false,
  cmPosition: { top: 0, left: 0 },
  transClicked: 0,
  showEdit: false,
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      // Fetch transactions from the backend
      const res = await axios.get("/api/v1/transactions");
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deleteTransaction(id) {
    if (
      window.confirm("Are you sure you want to delete this transaction?") ===
      true
    ) {
      try {
        await axios.delete(`/api/v1/transactions/${id}`);
        dispatch({
          type: "DELETE_TRANSACTION",
          payload: id,
        });
      } catch (err) {
        dispatch({
          type: "TRANSACTION_ERROR",
          payload: err.response.data.error,
        });
      }
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("api/v1/transactions", transaction, config);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function editTransaction(transaction) {
    dispatch({
      type: "EDIT_TRANSACTION",
      payload: transaction,
    });
    try {
      const res = await axios.put(
        `api/v1/transactions/${transaction._id}`,
        transaction
      );
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
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

        getTransactions,
        deleteTransaction,
        addTransaction,
        editTransaction,

        error: state.error,
        loading: state.loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
