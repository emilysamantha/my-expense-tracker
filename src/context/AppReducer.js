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
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
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
