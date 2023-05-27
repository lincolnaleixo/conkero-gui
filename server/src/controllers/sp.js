import axios from "axios"
import { spConfig } from "../services/config"

import { SellersApiClient } from '@scaleleap/selling-partner-api-sdk'
import { SpUser } from "../models/spUser"


export const init = async (req, res) => {
    try {
        res.send({
            // data: `https://sellercentral.amazon.com/apps/authorize/consent?redirect_uri=http://localhost:3000/auth/spRedirect&application_id=amzn1.application-oa2-client.6e25c6b89bee4cc19d6a4df32ba96076&state=stateexample&version=beta`,
            data: `https://sellercentral.amazon.com/apps/authorize/consent?redirect_uri=http://localhost:3000/auth/spRedirect&application_id=${spConfig.APP_ID}&state=stateexample&version=beta`,
            error: null
        })
    } catch (error) {
        console.log('error while sp init')
        console.log(error.message)
        if (error.response) {
            return res.send({
                error: true,
                message: error.response.data.error_description,
                data: false
            })
        }
        return res.send({
            error: true,
            message: 'An unexpected error occured!',
            data: false
        })
    }
}


export const authorize = async (req, res) => {
    try {
        const data = req.body;
        const { userId, clientId, clientSecret, refreshToken } = data;
        const payload = { grant_type: 'refresh_token', refresh_token: refreshToken, client_id: clientId, client_secret: clientSecret }
        const response = await axios.post(spConfig.LWA_TOKEN_URL, payload);
        const resData = response.data;
        if (resData.error) return res.send({ data: null, error: null, message: resData.error_description });
        const spUser = new SpUser({ userId, clientId, clientSecret, refreshToken })
        await spUser.save();
        res.send({ data: spUser, message: 'Selling Partner account added!', error: false })
    } catch (error) {
        console.log(error.response)
        if (error.response) {
            console.log('error while sp authorize', error.response.data)
            return res.send({
                error: true,
                message: error.response.data.error_description,
                data: false
            })
        }
        console.log('error while sp authorize', error)
        return res.send({
            error: true,
            message: 'An unexpected error occured!',
            data: false
        })
    }
}