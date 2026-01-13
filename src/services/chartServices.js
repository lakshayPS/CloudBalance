import axios from "axios";
import store from "../store";

const BASE_URL = "http://localhost:8080/snowflake";

export const getMonthlyCostByGroup = (params) => {
  return axios.get(`${BASE_URL}/monthly-cost-by-group`, {
    params,
    headers: { Authorization: `Bearer ${store.getState().auth.token}` },
  });
};

export const getAllFilterOptions = () => {
  return axios.get(`${BASE_URL}/get-filters`, {
    headers: { Authorization: `Bearer ${store.getState().auth.token}` },
  });
};
