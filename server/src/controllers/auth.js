import bcrypt, { compare, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'
import { User } from '../models/user.js'
import { JWT_SECRET } from '../services/config.js'
import mail from '../services/mail.js'




export const signup = async (req, res) => {
  try {
    const data = await req.body
    console.log('data', data)
    const userFromDb = await User.findOne({
      email: data.email
    })
    if (userFromDb) {
      return res.json({
        data: null,
        error: true,
        message: 'User with this email already exists!'
      })
    }
    const user = new User(data)
    const token = sign(user.id, JWT_SECRET)
    const hashedPassword = await hash(data.password, 10)
    user.token = token
    user.password = hashedPassword
    await user.save()
    return res.status(200)
      .json({ data: { user, token }, message: 'User registered successfully!', error: null })
  } catch (error) {
    console.log('error while signup')
    console.log(error)
    return res.send({
      error: true,
      message: 'Unexpected error occured',
      data: false
    })
  }
}

export const login = async (req, res) => {
  try {
    const data = await req.body
    const user = await User.findOne({
      email: data.email
    })
    if (!user) {
      return res.json({
        data: null,
        message: 'No user with this email exists!',
        error: true
      })
    }
    const valid = await compare(data.password, user.password)
    if (!valid) return res.json({ data: null, message: 'Invalid email or password!', error: true })
    const token = sign(user.id, JWT_SECRET)
    user.token = token
    await user.save()
    return res.status(200)
      .json({
        data: { user, loggedIn: true, token },
        message: 'User loggged in successfully!',
        error: null
      })
  } catch (error) {
    console.log('error while login')
    console.log(error)
    return res.send({
      error: true,
      message: 'Unexpected error occured',
      data: false
    })
  }
}

export const forgot = async (req, res) => {
  try {
    const { email } = req.body

    // Check if the user exists in the database
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404)
        .json({ message: 'User not found' })
    }

    // Generate a password reset token
    const resetToken = uuidv4()
    user.resetPasswordToken = resetToken
    user.resetPasswordExpires = Date.now() + 3600000 // Token expires in 1 hour

    // Save the user to the database
    await user.save()

    await mail(email, resetToken)

    return res.status(200)
      .json({ message: 'Password reset email sent' })
  } catch (err) {
    console.error(err)
    return res.status(500)
      .json({ message: 'Server Error', error: err })
  }
}

export const reset = async (req, res) => {
  try {
    const { token, password } = req.body
    console.log('body', token, password)

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    })
    if (!user) {
      return res.json({ message: 'Invalid or expired code', error: true })
    }

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)

    user.resetPasswordToken = undefined
    user.resetPasswordExpires = undefined

    await user.save()

    return res.status(200)
      .json({ message: 'Password reset successful' })
  } catch (err) {
    console.error(err)
    return res.status(500)
      .json({ message: 'Server Error', error: err })
  }
}
