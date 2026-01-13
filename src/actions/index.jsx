import { toast } from "react-toastify";
import {
  getAllOnboardedAccounts,
  getAllUsers,
  getAssignedAccountsByUserEmail,
  registerUser,
  update,
} from "../services/authServices";
import axios from "axios";
import store from "../store";
import { getAllFilterOptions } from "../services/chartServices";

const isAuthError = (err) =>
  err.response?.status === 401 || err.response?.status === 403;

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
    if (!isAuthError(err)) {
      toast.error(err.response?.data || "Update failed");
    }
    throw err;
  }
};

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
    if (!isAuthError(err)) {
      toast.error("Failed to fetch accounts");
    }
  }
};

export const fetchAllAccounts = () => async (dispatch) => {
  try {
    const response = await getAllOnboardedAccounts();

    dispatch({
      type: "SET_ACCOUNTS",
      payload: response?.data ?? [],
    });
  } catch (err) {
    if (!isAuthError(err)) {
      toast.error("Failed to fetch accounts");
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
    if (!isAuthError(err)) {
      toast.error("Failed to fetch user accounts");
    }
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

export const SET_FILTER_OPTIONS = "SET_FILTER_OPTIONS";

export const fetchFilterOptions = () => async (dispatch) => {
  try {
    // const token = store.getState().auth.token;
    // const response = await axios.get(
    //   "http://localhost:8080/snowflake/get-filters",
    //   { headers: { Authorization: `Bearer ${token}` } }
    // );
    const response = await getAllFilterOptions();

    const data = response?.data?.options || {};
    console.log("Fetched filter options:", data);

    const formatted = {};
    Object.keys(data).forEach((key) => {
      const friendlyKey = key
        .split("_")
        .map((w) => w[0] + w.slice(1).toLowerCase())
        .join(" ");
      formatted[friendlyKey] = data[key];
    });

    dispatch({
      type: SET_FILTER_OPTIONS,
      payload: formatted,
    });
  } catch (err) {
    if (!isAuthError(err)) {
      toast.error("Failed to fetch filter options");
    }
    throw err;
  }
};
