import { spConfig } from "../services/config"

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
        return res.send({
            error: true,
            message: 'Unexpected error occured',
            data: false
        })
    }
}