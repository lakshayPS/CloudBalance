const initialState = {
  token: null,
  email: null,
  role: null,
};

export const authReducer = (state = initialState, action) => {
  console.log("action: ", action);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        token: action.payload.token,
        email: action.payload.email,
        role: action.payload.role,
      };

    default:
      return state;
  }
};
