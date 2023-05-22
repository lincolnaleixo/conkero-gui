import { User } from "../models/user"

export const userWithToken = async (req, res) => {
    try {
        if (!req.user) return res.send({ error: 'No user exists with this token', data: null })
        return res.send({ data: req.user, error: null })
    } catch (error) {
        console.log('error while getting user with token')
        console.log(error.message)
        return res.send({
            error,
            data: false
        })
    }
}

export const update = async (req, res) => {
    try {
        const body = req.body;
        const user = await User.findByIdAndUpdate(req.user._id, body);
        console.log('user', user)
        if (!user) return res.send({ data: null, error: "No user found for this id" })
        for (let key in body) {
            user[key] = body[key];
        }
        return res.send({ data: user, message: 'User updated!', error: null })
    } catch (error) {
        console.log('error while updating user')
        console.log(error.message)
        return res.send({
            error,
            data: false
        })
    }
}

