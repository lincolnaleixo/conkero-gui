import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies, url }) => {
    const tokenFromCookies = cookies.get('token');
    if (url.pathname.includes('/redirect')) return { token: tokenFromCookies }
    if (tokenFromCookies) throw redirect(302, '/dashboard');
    else return { token: tokenFromCookies };
}