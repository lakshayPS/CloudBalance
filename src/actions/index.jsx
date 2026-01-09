import { toast } from "react-toastify";
import {
  getAllOnboardedAccounts,
  getAllUsers,
  getAssignedAccountsByUserEmail,
  registerUser,
  update,
} from "../services/authServices";
// import { useSelector } from "react-redux";

export const SET_USERS = "setUsers";

export const fetchUsers = () => async (dispatch, getState) => {
  const role = getState()?.accounts?.role;

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
    if (role === "ADMIN" || role === "READONLY") {
      toast.error("Error fetching users");
    }
    throw err;
  }
};

// export const addUser = (user) => async (dispatch) => {
//   try {
//     const response = await registerUser(user);

//     dispatch({
//       type: "addUser",
//       payload: response,
//     });

//     toast.success("User created successfully");
//   } catch (err) {
//     toast.error(err.response?.data || "Failed to create user");
//     throw err;
//   }
// };

export const addUser = (user) => async (dispatch) => {
  const response = await registerUser(user);

  dispatch({
    type: "addUser",
    payload: response?.data,
  });

  return response?.data; // important
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
    toast.error(err.response?.data);
    throw err;
  }
};

export const fetchAccounts = () => async (dispatch) => {
  try {
    const response = await getAllOnboardedAccounts();

    const data = Array.isArray(response?.data) ? response.data : [];

    dispatch({
      type: "SET_ACCOUNTS",
      payload: data,
    });
  } catch (err) {
    toast.error("Failed to fetch accounts");
  }
};

export const fetchAllAccounts = () => async (dispatch, getState) => {
  const role = getState()?.accounts?.role;
  try {
    const response = await getAllOnboardedAccounts();

    dispatch({
      type: "SET_ACCOUNTS",
      payload: response?.data ?? [],
    });
  } catch (err) {
    if (role === "ADMIN" || role === "READONLY") {
      toast.error("Failed to fetch all accounts");
    }
  }
};

export const fetchAccountsByEmail = (email) => async (dispatch) => {
  try {
    const response = await getAssignedAccountsByUserEmail(email);

    dispatch({
      type: "SET_ACCOUNTS",
      payload: response?.data ?? [],
    });
  } catch (err) {
    toast.error("Failed to fetch user accounts");
  }
};

export const toggleModal = () => ({
  type: "toggleModal",
});

export const loginSuccess = (payload) => ({
  type: "LOGIN_SUCCESS",
  payload,
});
