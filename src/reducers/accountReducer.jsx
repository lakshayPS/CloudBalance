import { toast } from "react-toastify";

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
    case "LOGOUT":
      toast.info("Session expired. Please log in again.");

      return initialState;
    default:
      return state;
  }
};
