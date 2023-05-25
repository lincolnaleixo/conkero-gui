import { error, redirect } from '@sveltejs/kit';
import { toast } from "@zerodevx/svelte-toast";
import { authorizeAds, getUserWithToken, updateUser } from '../../../../services/api.js';

export const load = async ({ url, cookies }) => {
    const urlParams = new URLSearchParams(url.searchParams);
    const code = urlParams.get("code");
    const tokenFromCookies = cookies.get('token');
    if (tokenFromCookies) {
        const response = await getUserWithToken(tokenFromCookies);
        if (response.error) throw error(500, "Internal Server Error")
        const userFromDB = response.data;
        if (code && userFromDB._id) {
            const adsResponse = await authorizeAds({ code, userId: userFromDB._id });
            if (adsResponse.error) return;
            const userResponse = await updateUser(
                {
                    ads: adsResponse.data._id,
                },
                tokenFromCookies
            );
            if (userResponse.error) return;
            toast.push("Added Advertising API Successfully!");
            throw redirect(302, '/dashboard');
        }
    }
    throw error(500, 'Internal Server Error')
}