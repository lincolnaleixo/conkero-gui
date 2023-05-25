
import { redirect } from "@sveltejs/kit";
import axios from "axios";
import { API_URL } from "../../../services/config";

export const load = async ({ cookies, url }) => {
    const tokenFromCookies = cookies.get('token');
    if (url.pathname.includes('/redirect')) return { token: tokenFromCookies }
    if (tokenFromCookies) throw redirect(302, '/dashboard');
    else return { token: tokenFromCookies };
}

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        const payload = { email, password };

        const response = await axios.post(`${API_URL}/auth/signup`, payload);
        const resData = response.data;
        console.log("response from signup", resData);
        if (resData.error) return {
            error: resData.error
        }
        await cookies.set("token", resData.data.token);
        throw redirect(301, '/dashboard')

        return {
            success: true
        }
    }
}