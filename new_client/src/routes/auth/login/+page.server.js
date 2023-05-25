
import { fail, redirect } from "@sveltejs/kit";
import axios from "axios";
import { API_URL } from "../../../services/config";


export const load = async ({ cookies, url }) => {
    const tokenFromCookies = cookies.get('token');
    if (url.pathname.includes('/redirect')) return { token: tokenFromCookies }
    if (tokenFromCookies) throw redirect(302, '/dashboard');
    else return { token: tokenFromCookies };
}

export const actions = {
    default: async ({ cookies, request, invalid }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        const payload = { email, password };

        const response = await axios.post(`${API_URL}/auth/login`, payload);
        const resData = response.data;
        if (resData.error) return fail(400, { message: resData.message, error: true })
        cookies.set("token", resData.data.token, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 30,
        });
        throw redirect(302, '/')
    }
}