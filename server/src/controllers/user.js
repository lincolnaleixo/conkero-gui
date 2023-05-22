
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