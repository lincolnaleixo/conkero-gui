import nodemailer from 'nodemailer'
import { GMAIL_PASS, GMAIL_USERNAME, RESET_WEBSITE_URL } from './config'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USERNAME,
    pass: GMAIL_PASS
  }
})

export default async (email, code) => {
  try {
    const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>',
      to: email,
      subject: 'Password reset email',
      text: `${RESET_WEBSITE_URL}?code=${code} is your verification code for reseting your conkero password`
    })

    console.log('Mail sent:', info.messageId)
    return { data: 'Success', error: null }
  } catch (error) {
    console.log('error sending mail', error)
    return { data: null, error }
  }
}
