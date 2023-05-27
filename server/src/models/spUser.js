import mongoose from 'mongoose'

const spUser = new mongoose.Schema(
    {
        clientId: { type: String, trim: true, required: true, unique: false },
        clientSecret: { type: String, trim: true, required: true, unique: false },
        refreshToken: { type: String, trim: true, required: true, unique: false },
        userId: { type: String, required: true },
    },
    { timestamps: true }
)


export const SpUser = mongoose.model('SpUser', spUser)
