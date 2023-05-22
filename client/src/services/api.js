import axios from "axios";
import { API_URL } from './config';

export const getUserWithToken = async (token) => {
    const response = await axios.get(`${API_URL}/user/token`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}