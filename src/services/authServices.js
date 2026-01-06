import axios from "axios";

const PUBLIC_URL = "http://localhost:8080/auth"; // Replace with your backend URL
const PROTECTED_URL = "http://localhost:8080/users";
const PROTECTED_URL2 = "http://localhost:8080/auth";
const ONBOARDING_URL = "http://localhost:8080/api/accounts";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  // console.log("tokennn: ", token);
  return { Authorization: `Bearer ${token}` };
};

// export const registerUser = async (user) => {
//   const response = await axios.post(`${PROTECTED_URL2}/register`, user, {
//     headers: getAuthHeader(),
//   });

//   return response.data;
// };

export const registerUser = async (user) => {
  const response = await axios.post(`${PROTECTED_URL}/addUser`, user, {
    headers: getAuthHeader(),
  });

  return response.data;
};

// export const update = async (user) => {
//   const response = await axios.put(`${PROTECTED_URL}/updateUser`, user, {
//     headers: getAuthHeader(),
//   });

//   return response.data;
// };

export const update = async (userId, payload) => {
  const response = await axios.post(
    `${PROTECTED_URL}/editUser/${userId}`,
    payload,
    { headers: getAuthHeader() }
  );

  return response.data;
};

export const loginUser = (credentials) => {
  return axios.post(`${PUBLIC_URL}/login`, credentials);
};

export const getAllUsers = () => {
  return axios.get(`${PROTECTED_URL}/getAllUsers`, {
    headers: getAuthHeader(),
  });
  // return axios.get(`${PROTECTED_URL}/getAllUsers`);
};

export const getAllAccounts = () => {
  return axios.get(`${ONBOARDING_URL}/getAllAccounts`, {
    headers: getAuthHeader(),
  });
};

export const assignAccountsToUser = (userId, accIds) => {
  console.log("userId: ", userId, " and accIds: ", accIds);
  return axios.post(
    `http://localhost:8080/api/accounts/users/${userId}/assign-accounts`,
    {
      accIds: accIds,
    },
    { headers: getAuthHeader() }
  );
};

export const getAssignedAccountsByUserId = (userId) => {
  return axios.get(`${ONBOARDING_URL}/users/${userId}/accounts`, {
    headers: getAuthHeader(),
  });
};

export const createAccount = (accountId, accountName, roleArn) => {
  const payload = {
    accId: Number(accountId),
    accName: accountName,
    iamARN: roleArn,
  };

  return axios.post(`http://localhost:8080/api/accounts/create`, payload, {
    headers: getAuthHeader(),
  });
};
