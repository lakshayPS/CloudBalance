import { toast } from "react-toastify";

const initialState = {
  users: [],
};

export const modifyTable = (state = initialState, action) => {
  switch (action.type) {
    case "setUsers":
      return {
        ...state,
        users: action.payload,
      };

    case "addUser": {
      const newUser = action.payload;

      return {
        ...state,
        users: [...state.users, newUser],
      };
    }

    case "updateUser": {
      const updated = action.payload;

      return {
        ...state,
        users: state.users.map((u) =>
          u.email === updated.email ? updated : u
        ),
      };
    }
    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
};
