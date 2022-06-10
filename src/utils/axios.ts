import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const params = {
    ...config.params,
    appid: process.env.REACT_APP_WEATHER_API_KEY,
  };

  return {
    ...config,
    params,
  };
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    // @ts-ignore
    const errorMessage = error?.response?.data.message || "Request failed";
    return Promise.reject(errorMessage);
  }
);

export default axiosInstance;
