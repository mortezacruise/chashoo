import axios from "axios";
import { BASE_URL } from "../Values/Strings";

import AsyncStorage from "@react-native-community/async-storage";
const http = axios.create({
  baseURL: BASE_URL,
  timeout: 7000,
  headers: { "Content-Type": "application/json" }
});

http.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default http;
