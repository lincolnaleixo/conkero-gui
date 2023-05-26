import { redirect } from '@sveltejs/kit'

export const load = async ({ cookies, locals }) => {
    cookies.delete('token', {
        path: '/',
    })
    locals.user = {}
    throw redirect(302, '/')
}