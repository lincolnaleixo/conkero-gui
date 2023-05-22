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


export const adsInit = async () => {
    const response = await axios.get(`${API_URL}/ads/init`)
    return response.data;
}

export const authorizeAds = async (payload) => {
    const response = await axios.post(`${API_URL}/ads/authorize`, payload);
    return response.data
}

export const updateUser = async (payload, token) => {
    const response = await axios.post(`${API_URL}/user/update`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data
}