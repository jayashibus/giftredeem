import axios from "axios";

// Proxy Configurations
const proxyDev = {
  baseURL: window.location.origin,
  proxy: {
    host: window.location.hostname,
    port: parseInt(window.location.port),
    protocol: window.location.protocol,
  },
};

const proxyConfig = proxyDev;
const axiosApi = axios.create({ ...proxyConfig });

// Request interceptor for API calls
axiosApi.interceptors.request.use(
  async (config) => {
    //   const value = await redisClient.get(rediskey)
    //   const keys = JSON.parse(value)
    config.headers = {
      // 'Authorization': `Bearer ${keys.access_token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      //   const access_token = await refreshAccessToken();
      //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      return axiosApi(originalRequest);
    }
    return Promise.reject(error);
  }
);

export const http = axiosApi;
