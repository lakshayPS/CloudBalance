import { toast } from "react-toastify";
import { getAllUsers, registerUser, update } from "../services/authServices";

export const SET_USERS = "setUsers";

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await getAllUsers();

    const mappedUsers = response?.data.map((user) => ({
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
  } catch (err) {
    toast.error("Error fetching users");
    throw err;
  }
};

export const addUser = (user) => async (dispatch) => {
  try {
    const response = await registerUser(user);

    dispatch({
      type: "addUser",
      payload: response,
    });

    toast.success("User created successfully");
  } catch (err) {
    toast.error(err.response?.data || "Failed to create user");
    throw err;
  }
};

export const updateUser = (userId, userData) => async (dispatch) => {
  try {
    const updatedUser = await update(userId, userData);

    dispatch({
      type: "updateUser",
      payload: updatedUser,
    });

    toast.success("User updated successfully");
  } catch (err) {
    console.error("UPDATE ERROR CAUGHT IN ACTION", err);
    toast.error("Update failed");
    throw err;
  }
};

export const toggleModal = () => ({
  type: "toggleModal",
});

export const loginSuccess = (payload) => ({
  type: "LOGIN_SUCCESS",
  payload,
});
