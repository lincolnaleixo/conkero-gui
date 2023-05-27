import { fail, redirect } from '@sveltejs/kit';
import { toast } from '@zerodevx/svelte-toast';
import { authorizeSp, updateUser } from '../../../services/api.js';

export const load = ({ locals }) => {
    if (locals.user && locals.user.sp) throw redirect(302, '/');
    else return {}
}

export const actions = {
    default: async ({ request, locals }) => {
        const data = await request.formData();
        const clientId = data.get('clientId');
        const clientSecret = data.get('clientSecret');
        const refreshToken = data.get('refreshToken');
        const payload = { clientId, clientSecret, refreshToken, userId: locals.user._id };

        const authorizeResponse = await authorizeSp(payload, locals.token);
        console.log('authorizeResponse', authorizeResponse)
        if (authorizeResponse.error) return fail(400, { message: authorizeResponse.message, error: true })

        const userResponse = await updateUser(
            {
                sp: authorizeResponse.data._id,
            },
            locals.token
        );
        if (userResponse.error) return fail(400, { message: userResponse.message, error: true });
        locals.user = userResponse.data
        toast.push(authorizeResponse.message)
        throw redirect(302, '/dashboard/general')
    }
}