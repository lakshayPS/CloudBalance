import axios from "axios";
import api from "../api/axios";
import store from "../store";

export const getMonthlyCostByGroup = (params) => {
  return api.get("/snowflake/monthly-cost-by-group", {
    params,
  });
};

export const getAllFilterOptions = () => {
  return axios.get("http://localhost:8080/snowflake/get-filters", {
    headers: { Authorization: `Bearer ${store.getState().auth.token}` },
  });
};
