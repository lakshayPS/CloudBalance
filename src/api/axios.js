import axios from "axios";
import store from "../store";
import { persistor } from "../store";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

let isLoggingOut = false;

api.interceptors.request.use((config) => {
  const token = store.getState().auth.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;

    if ((status === 401 || status === 403) && !isLoggingOut) {
      isLoggingOut = true;

      toast.info("Session expired. Please log in again.");

      store.dispatch({ type: "LOGOUT" });
      await persistor.purge();

      window.location.replace("/");
    }

    return Promise.reject(error);
  }
);

export default api;
