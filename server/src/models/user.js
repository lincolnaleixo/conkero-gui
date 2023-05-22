import mongoose from 'mongoose'

const user = new mongoose.Schema(
  {
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, required: true },
    token: { type: String, required: false },
    resetPasswordToken: { type: String, required: false },
    resetPasswordExpires: { type: Number, required: false },
    sp: { type: String, required: false },
    ads: { type: String, required: false }
  },
  { timestamps: true }
)

user.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret.__v
  }
})

export const User = mongoose.model('User', user)
