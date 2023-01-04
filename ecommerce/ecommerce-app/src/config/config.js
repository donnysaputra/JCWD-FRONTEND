import axios from "axios";
export const API_URL = "http://localhost:2000";
//menciptakan base api url
 const axiosInstance = axios.create({
  baseURL: API_URL,
});
export default axiosInstance;