import axios from "axios";

const PUBLIC_URL = "http://localhost:8080/auth"; // Replace with your backend URL
const PROTECTED_URL = "http://localhost:8080/users";
const ONBOARDING_URL = "http://localhost:8080/api/accounts";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
};

export const registerUser = async (user) => {
  const response = await axios.post(`${PROTECTED_URL}/register`, user, {
    headers: getAuthHeader(),
  });

  return response.data;
};

export const update = async (user) => {
  const response = await axios.put(`${PROTECTED_URL}/updateUser`, user, {
    headers: getAuthHeader(),
  });

  return response.data;
};

export const loginUser = (credentials) => {
  return axios.post(`${PUBLIC_URL}/login`, credentials);
};

export const getAllUsers = () => {
  return axios.get(`${PROTECTED_URL}/getAllUsers`, {
    headers: getAuthHeader(),
  });
};

export const getAllAccounts = () => {
  return axios.get(`${ONBOARDING_URL}/getAllAccounts`, {
    headers: getAuthHeader(),
  });
};

export const assignAccountsToUser = (userId, accIds) => {
  return axios.post(
    `http://localhost:8080/api/accounts/users/${userId}/assign-accounts`,
    {
      accIds,
    }
  );
};
