import {
  assignAccountsToUser,
  getAllUsers,
  registerUser,
  update,
} from "../services/authServices";

export const SET_USERS = "setUsers";

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await getAllUsers();
    // console.log("responseeeee: ", response);
    const mappedUsers = response?.data.map((user, index) => {
      return {
        id: index + 1,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      };
    });

    dispatch({
      type: SET_USERS,
      payload: mappedUsers,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const addUser =
  (user, selectedAccounts = []) =>
  async (dispatch) => {
    try {
      const response = await registerUser(user); // creates the user
      const newUser = response;

      // Assign accounts if ROLE_CUSTOMER
      console.log("newuserrrr: ", newUser);
      if (user.role === "ROLE_CUSTOMER" && selectedAccounts.length > 0) {
        await assignAccountsToUser(newUser.id, selectedAccounts);
      }

      dispatch({
        type: "addUser",
        payload: newUser,
      });
    } catch (error) {
      console.error("Add user failed", error);
      alert("Failed to add user");
    }
  };

export const updateUser =
  (user, selectedAccounts = []) =>
  async (dispatch) => {
    try {
      const response = await update(user); // updates the user
      const updatedUser = response?.data || response;

      // Assign accounts if ROLE_CUSTOMER
      console.log("updateddddd  userrr: ", updatedUser);
      console.log("selectedAccountss: ", selectedAccounts);

      if (user.role === "ROLE_CUSTOMER" && selectedAccounts.length > 0) {
        await assignAccountsToUser(updatedUser.id, selectedAccounts);
      }

      dispatch({
        type: "updateUser",
        payload: updatedUser,
      });
    } catch (error) {
      console.error("Update failed", error);
      alert("Failed to update user");
    }
  };

export const toggleModal = () => ({
  type: "toggleModal",
});

export const loginSuccess = (token, email, role) => ({
  type: "LOGIN_SUCCESS",
  payload: { token, email, role },
});
