import { API_HEADERS } from "./apiConfig";
import apiClient from "./axiosConfig";

export async function getCoursesInProgress() {
    const response = await apiClient.get("/courses/in-progress", { headers: API_HEADERS });
    return response.data;
}