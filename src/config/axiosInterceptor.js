import axios from "axios";

const Backend = axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL });

Backend.interceptors.request.use(
  (config) => {
    const details = localStorage.getItem("userInfo");
    let userInfo;
    if (details) {
      userInfo = JSON.parse(details);
    }

    const token = userInfo?.token;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
Backend.interceptors.request.use(
  (config) => {
    const details = localStorage.getItem("userInfo");
    let userInfo;
    if (details) {
      userInfo = JSON.parse(details);
    }

    const token = userInfo?.token;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Backend.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.href = "/login";
      } else {
        console.log("HTTP ERROR CODE:", error.response.status);
      }
    } else {
      console.log("Network Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default Backend;