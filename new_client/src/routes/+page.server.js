import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, url }) => {
    console.log('token in routes pgae', locals.token)
    if (url.pathname.includes('/redirect')) return {}
    if (locals.token && locals.token.length) throw redirect(302, '/dashboard');
    else throw redirect(302, '/auth/register');
}