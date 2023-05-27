import 'dotenv/config.js'
import './services/db.js'

import cors from 'cors'
import express from 'express'

import ads from './routes/ads.js'
import auth from './routes/auth.js'
import sp from './routes/sp.js'
import user from './routes/user.js'

import authMiddleWare from './middlewares/auth.js'

import { PORT } from './services/config.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth', auth)
app.use('/sp', authMiddleWare, sp)
app.use('/ads', authMiddleWare, ads)
app.use('/user', authMiddleWare, user)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
