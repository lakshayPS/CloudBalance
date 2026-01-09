// import axios from "axios";
// import store from "../store";

// const PUBLIC_URL = "http://localhost:8080/auth";
// const PROTECTED_URL = "http://localhost:8080/users";
// const PROTECTED_URL2 = "http://localhost:8080/auth";
// const ONBOARDING_URL = "http://localhost:8080/api/accounts";

// const getAuthHeader = () => {
//   const token = store.getState().auth.token;
//   return token ? { Authorization: `Bearer ${token}` } : {};
// };

// export const registerUser = async (user) => {
//   const response = await axios.post(`${PROTECTED_URL}/addUser`, user, {
//     headers: getAuthHeader(),
//   });

//   return response.data;
// };

// export const update = async (userId, payload) => {
//   const response = await axios.post(
//     `${PROTECTED_URL}/editUser/${userId}`,
//     payload,
//     { headers: getAuthHeader() }
//   );

//   return response.data;
// };

// export const loginUser = (credentials) => {
//   return axios.post(`${PUBLIC_URL}/login`, credentials);
// };

// export const getAllUsers = () => {
//   return axios.get(`${PROTECTED_URL}/getAllUsers`, {
//     headers: getAuthHeader(),
//   });
// };

// export const getAllOnboardedAccounts = () => {
//   return axios.get(`${ONBOARDING_URL}/getAllAccounts`, {
//     headers: getAuthHeader(),
//   });
// };

// export const assignAccountsToUser = (userId, accIds) => {
//   return axios.post(
//     `${ONBOARDING_URL}/users/${userId}/assign-accounts`,
//     {
//       accIds: accIds,
//     },
//     { headers: getAuthHeader() }
//   );
// };

// export const getAssignedAccountsByUserId = (userId) => {
//   return axios.get(`${ONBOARDING_URL}/users/${userId}/accounts`, {
//     headers: getAuthHeader(),
//   });
// };

// export const getAssignedAccountsByUserEmail = (userEmail) => {
//   return axios.get(`${ONBOARDING_URL}/getByEmail?email=${userEmail}`, {
//     headers: getAuthHeader(),
//   });
// };

// export const createAccount = (accountId, accountName, roleArn) => {
//   const payload = {
//     accId: Number(accountId),
//     accName: accountName,
//     iamARN: roleArn,
//   };

//   return axios.post(`${ONBOARDING_URL}/create`, payload, {
//     headers: getAuthHeader(),
//   });
// };

import api from "../api/axios";

export const registerUser = (user) => {
  return api.post("/users/addUser", user);
};

export const update = (userId, payload) => {
  return api.post(`/users/editUser/${userId}`, payload);
};

export const loginUser = (credentials) => {
  return api.post("/auth/login", credentials);
};

export const getAllUsers = () => {
  return api.get("/users/getAllUsers");
};

export const getAllOnboardedAccounts = () => {
  return api.get("/api/accounts/getAllAccounts");
};

export const assignAccountsToUser = (userId, accIds) => {
  return api.post(`/api/accounts/users/${userId}/assign-accounts`, {
    accIds,
  });
};

export const getAssignedAccountsByUserId = (userId) => {
  return api.get(`/api/accounts/users/${userId}/accounts`);
};

export const getAssignedAccountsByUserEmail = (email) => {
  return api.get(`/api/accounts/getByEmail`, {
    params: { email },
  });
};

export const createAccount = (accountId, accountName, roleArn) => {
  return api.post("/api/accounts/create", {
    accId: Number(accountId),
    accName: accountName,
    iamARN: roleArn,
  });
};
