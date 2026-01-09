const initialState = {
  list: [],
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACCOUNTS":
      return {
        ...state,
        list: action.payload || [],
      };
    default:
      return state;
  }
};
