export default (state, action) => {
  // Changes the state based on the dispatch type
  // Takes the response and passes it down to each component
  switch (action.type) {
    // case "GET_TRANSACTIONS":
    // return {
    //   ...state,
    //   loading: false,
    //   transactions: action.payload,
    // };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case "ADD_TRANSACTION":
      // Most recent transaction goes first
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case "TOGGLE_THEME":
      return {
        ...state,
        theme: action.payload === "light" ? "dark" : "light",
      };

    case "SET_SHOW":
      return {
        ...state,
        show: action.payload,
      };

    case "SET_CM_POSITION":
      return {
        ...state,
        cmPosition: action.payload,
      };

    case "SET_TRANS_CLICKED":
      return {
        ...state,
        transClicked: action.payload,
      };
    // case "TRANSACTION_ERROR":
    // return {
    //   ...state,
    //   error: action.payload,
    // };
    default:
      return state;
  }
};
