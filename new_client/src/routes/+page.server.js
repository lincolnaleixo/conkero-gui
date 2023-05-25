import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, url }) => {
    if (url.pathname.includes('/redirect')) return {}
    if (locals.token) throw redirect(302, '/dashboard');
    else throw redirect(302, '/auth/register');
}