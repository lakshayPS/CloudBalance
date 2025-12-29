import { getAllUsers, registerUser, update } from "../services/authServices";

export const SET_USERS = "setUsers";

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await getAllUsers();

    const mappedUsers = response?.data.map((user, index) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    }));

    dispatch({
      type: SET_USERS,
      payload: mappedUsers,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const addUser = (user) => async (dispatch) => {
  try {
    const response = await registerUser(user);
    const newUser = response;

    dispatch({
      type: "addUser",
      payload: newUser,
    });
  } catch (error) {
    console.error("Add user failed", error);
    alert("Failed to add user");
  }
};

export const updateUser = (userId, userData) => async (dispatch) => {
  try {
    const updatedUser = await update(userId, userData);

    dispatch({
      type: "updateUser",
      payload: updatedUser,
    });
  } catch (error) {
    console.error("Update failed", error);
    throw error;
  }
};

export const toggleModal = () => ({
  type: "toggleModal",
});

export const loginSuccess = (token, email, role) => ({
  type: "LOGIN_SUCCESS",
  payload: { token, email, role },
});
