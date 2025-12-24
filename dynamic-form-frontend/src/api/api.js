import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000/api"
  baseURL: "https://dynamic-form-builder-production-81b3.up.railway.app/api"
});


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
