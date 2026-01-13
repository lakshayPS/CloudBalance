import { SET_FILTER_OPTIONS } from "../actions";

const initialState = {
  options: {},
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_OPTIONS:
      return {
        ...state,
        options: action.payload,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};
