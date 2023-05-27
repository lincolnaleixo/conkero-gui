import mongoose from 'mongoose'

const adUser = new mongoose.Schema(
    {
        accessToken: { type: String, trim: true, required: true, unique: false },
        refreshToken: { type: String, trim: true, required: true, unique: false },
        userId: { type: String, required: true },
    },
    { timestamps: true }
)


export const AdUser = mongoose.model('AdUser', adUser)
