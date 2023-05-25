import { error } from '@sveltejs/kit';
import routes from './routes.js';

export const load = async ({ locals, url }) => {
    if (!routes.includes(url.pathname)) throw error(404, 'Not Found')

    return { user: locals.user }
};