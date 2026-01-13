const initialState = {
  list: [],
  selectedAccount: null,
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACCOUNTS":
      return {
        ...state,
        list: action.payload || [],
      };
    case "SET_SELECTED_ACCOUNT":
      return {
        ...state,
        selectedAccount: action.payload,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};
