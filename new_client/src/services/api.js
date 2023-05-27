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


export const adsInit = async (token) => {
    const response = await axios.get(`${API_URL}/ads/init`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    return response.data;
}

export const authorizeAds = async (payload, token) => {
    const response = await axios.post(`${API_URL}/ads/authorize`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
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

export const authorizeSp = async (payload, token) => {
    const response = await axios.post(`${API_URL}/sp/authorize`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data
}