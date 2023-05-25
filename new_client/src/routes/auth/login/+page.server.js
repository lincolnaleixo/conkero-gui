
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

        const response = await axios.post(`${API_URL}/auth/login`, payload);
        const resData = response.data;
        console.log("response from signup", resData);
        if (resData.error) return {
            error: resData.error
        }
        cookies.set("token", resData.data.token, {
            // send cookie for every page
            path: '/',
            // server side only cookie so you can't use `document.cookie`
            httpOnly: true,
            // only requests from same site can send cookies
            // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
            sameSite: 'strict',
            // only sent over HTTPS in production
            secure: process.env.NODE_ENV === 'production',
            // set cookie to expire after a month
            maxAge: 60 * 60 * 24 * 30,
        });
        throw redirect(302, '/')
    }
}