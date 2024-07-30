import axios from "axios";

const adminURL = "https://wtsacademy.dedicateddevelopers.us";

const axiosInstance = axios.create({
  baseURL: adminURL,
});

const profilePicBaseUrl = 'https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/';

export const profile_Url = (media) => {
    return `${profilePicBaseUrl}${media}`;
};

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
