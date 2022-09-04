import axios from "axios";

const token = localStorage.getItem("token");

export const axiosInstance = axios.create({
  baseURL: "http://79.143.31.216/",
});


axiosInstance.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem("token");
    if (token && config?.headers) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);