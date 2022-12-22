import axios from "axios";
import { BACKEND_URL } from "./env";

export const ApiController = axios.create({
  baseURL: BACKEND_URL,
  timeout: 1000,
});

ApiController.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    config.headers["Authorization"] = localStorage.getItem("login-token");
    return config;
  },
  (e) => {
    return Promise.reject(e);
  }
);

ApiController.interceptors.response.use(
  (res) => {
    console.log("axios interceptor", res);
    return res;
  },
  (e) => {
    return Promise.reject(e);
  }
);
