import { redirect } from '@sveltejs/kit'

export const load = async ({ cookies, locals }) => {
    cookies.set('token', undefined, {
        path: '/',
        expires: new Date(0),
    })
    locals.user = {}
    throw redirect(302, '/')
}