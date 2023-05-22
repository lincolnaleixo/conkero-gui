import { OAuthClient } from '@scaleleap/amazon-advertising-api-sdk'
import { amazonMarketplaces, assertMarketplaceHasAdvertising } from '@scaleleap/amazon-marketplaces'
import axios from 'axios'
import { stringify } from 'qs'
import { AdUser } from '../models/adUser'
import { adsConfig } from '../services/config'

assertMarketplaceHasAdvertising(amazonMarketplaces.US)

export const init = async (req, res) => {
    try {
        const client = new OAuthClient({
            clientId: adsConfig.CLIENT_ID,
            clientSecret: adsConfig.CLIENT_SECRET,
            redirectUri: adsConfig.REDIRECT_URI,
            scopes: adsConfig.PERMISSION_SCOPE
        }, amazonMarketplaces.US)

        const uri = client.getUri()

        res.send({
            error: null,
            data: uri
        })
    } catch (error) {
        console.log('error while oauth')
        console.log(error.message)
        return res.send({
            error,
            data: null
        })
    }
}

export const authorize = async (req, res) => {
    try {
        const { code, userId } = req.body
        console.log('body', code, userId)
        const payload = stringify({
            grant_type: 'authorization_code',
            code,
            redirect_uri: adsConfig.REDIRECT_URI,
            client_id: adsConfig.CLIENT_ID,
            client_secret: adsConfig.CLIENT_SECRET
        })
        const response = await axios.post(adsConfig.TOKEN_URL, payload, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const resData = response.data
        const adUser = new AdUser({ accessToken: resData.access_token, refreshToken: resData.refresh_token, userId })
        await adUser.save();
        return res.send({ data: adUser, error: null })
    } catch (error) {
        console.log('error while getting tokens')
        console.log(error)
        return res.send({
            error,
            data: null
        })
    }
}
