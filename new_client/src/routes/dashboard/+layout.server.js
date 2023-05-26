import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
    const tokenFromCookies = locals.token;
    if (!tokenFromCookies) throw redirect(302, '/');
    else return { token: tokenFromCookies };
}