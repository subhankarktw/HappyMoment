import axios from "axios";

const adminURL = "https://wtsacademy.dedicateddevelopers.us";

const axiosInstance = axios.create({
  baseURL: adminURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;
