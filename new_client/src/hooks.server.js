import { getUserWithToken } from './services/api';

export const handle = async ({ event, resolve, }) => {
    const tokenFromCookies = event.cookies.get('token', { path: '/' });
    console.log('token in handle hook', tokenFromCookies)

    if (!tokenFromCookies) {
        event.locals.user = {}
        return await resolve(event);
    }
    event.locals.token = tokenFromCookies

    const response = await getUserWithToken(tokenFromCookies);
    if (response.error) return await resolve(event);

    event.locals.user = response.data;

    return await resolve(event)
};