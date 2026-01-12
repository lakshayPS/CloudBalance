import api from "../api/axios";

export const getMonthlyCostByGroup = (params) => {
  return api.get("/snowflake/monthly-cost-by-group", {
    params,
  });
};
