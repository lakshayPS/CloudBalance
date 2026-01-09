import { toast } from "react-toastify";

const initialState = {
  token: null,
  email: null,
  role: null,
  userName: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        token: action?.payload?.token,
        email: action?.payload?.email,
        role: action?.payload?.role,
        userName: action?.payload?.userName,
      };

    case "LOGOUT":
      toast.info("Session expired. Please log in again.");
      return initialState;

    default:
      return state;
  }
};
