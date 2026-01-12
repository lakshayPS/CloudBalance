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
