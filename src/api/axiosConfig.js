import axios from "axios";
import { API_BASE_URL } from "./apiConfig";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000
});

export default apiClient;