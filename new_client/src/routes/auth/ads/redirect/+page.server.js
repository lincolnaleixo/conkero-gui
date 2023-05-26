import { error, redirect } from '@sveltejs/kit';
import { toast } from "@zerodevx/svelte-toast";
import { authorizeAds, getUserWithToken, updateUser } from '../../../../services/api.js';

export const load = async ({ url, cookies }) => {
    const urlParams = new URLSearchParams(url.searchParams);
    const code = urlParams.get("code");
    console.log('code', code)
    const tokenFromCookies = cookies.get('token')
    console.log('tokenFromCookies', tokenFromCookies)
    if (tokenFromCookies) {
        const response = await getUserWithToken(tokenFromCookies);
        console.log('user response', response)
        if (response.error) throw error(500, "Internal Server Error")
        const userFromDB = response.data;
        if (code && userFromDB._id) {
            const adsResponse = await authorizeAds({ code, userId: userFromDB._id });
            console.log('adsResponse', adsResponse)
            if (adsResponse.error) return;
            const userResponse = await updateUser(
                {
                    ads: adsResponse.data._id,
                },
                tokenFromCookies
            );
            if (userResponse.error) return;
            console.log('final user updatee', userResponse)
            toast.push("Added Advertising API Successfully!", { classes: ['info'], duration: 3000, });
            throw redirect(302, '/dashboard');
        }
    }
    throw error(500, 'Internal Server Error')
}