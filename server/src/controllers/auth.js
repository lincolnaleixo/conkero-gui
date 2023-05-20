import axios from 'axios'
import { compare, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { MongoClient } from 'mongodb'
import { stringify } from 'qs'
import { User } from '../models/user.js'
import { JWT_SECRET, MONGO_URI, amz } from '../services/config.js'

export async function grant (req, res) {
  try {
    console.log(amz)
    res.send({
      error: null,
      data: {
        url: `https://www.amazon.com/ap/oa?client_id=${amz.CLIENT_ID}&scope=${amz.PERMISSION_SCOPE}&response_type=code&redirect_uri=${amz.REDIRECT_URL}`
      }
    })
  } catch (error) {
    console.log('error while oauth')
    console.log(error.message)
    return res.status(400)
      .send({
        error,
        data: false
      })
  }
}

export async function token (req, res) {
  try {
    const { code } = req.body
    const payload = stringify({
      grant_type: 'authorization_code',
      code,
      redirect_uri: amz.REDIRECT_URL,
      client_id: amz.CLIENT_ID,
      client_secret: amz.CLIENT_SECRET
    })
    const reqConfig = {
      method: 'post',
      url: amz.TOKEN_URL,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: payload
    }
    const response = await axios.request(reqConfig)
    const resData = response.data
    if (resData.token_type) {
      const client = new MongoClient(MONGO_URI)
      await client.connect()
      await client
        .db('conkero')
        .collection('keys')
        .updateOne(
          { type: 'amazon' },
          {
            $set: {
              ACCESS_TOKEN: resData.access_token,
              REFRESH_TOKEN: resData.refresh_token
            }
          }
        )
      amz.ACCESS_TOKEN = resData.access_token
      amz.REFRESH_TOKEN = resData.refresh_token
      await client.close()
    }
    res.send({ data: 'Success', error: null })
  } catch (error) {
    console.log('error while getting tokens')
    console.log(error)
    return res.status(400)
      .send({
        error,
        data: false
      })
  }
}

export async function signup (req, res) {
  try {
    const data = await req.body
    const userFromDb = await User.findOne({
      email: data.email
    })
    if (userFromDb) {
      return res.json({
        data: null,
        error: 'User with this email already exists'
      })
    }
    const user = new User(data)
    const token = sign(user.id, JWT_SECRET)
    const hashedPassword = await hash(data.password, 10)
    user.token = token
    user.password = hashedPassword
    await user.save()
    return res.json({ data: { user, token }, error: null })
  } catch (error) {
    console.log('error while signup')
    console.log(error)
    return res.status(400)
      .send({
        error: 'Unexpected error occured',
        data: false
      })
  }
}

export async function login (req, res) {
  try {
    const data = await req.body
    const user = await User.findOne({
      email: data.email
    })
    if (!user) {
      return res.json({
        data: null,
        error: 'No user found with this email'
      })
    }
    const valid = await compare(data.password, user.password)
    if (!valid) return res.json({ data: null, error: 'Incorrect Password' })
    const token = sign(user.id, JWT_SECRET)
    user.token = token
    await user.save()
    return res.json({
      data: { user, loggedIn: true, token },
      error: null
    })
  } catch (error) {
    console.log('error while login')
    console.log(error)
    return res.status(400)
      .send({
        error: 'Unexpected error occured',
        data: false
      })
  }
}
