import 'dotenv/config.js'
import './services/db.js'

import cors from 'cors'
import express from 'express'

import { init } from './services/authWithPassport.js'

import auth from './routes/auth.js'
import sp from './routes/sp.js'

import { PORT } from './services/config.js'

const app = express()

app.use(cors())
app.use(express.json())

init()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/auth', auth)
app.use('/sp', sp)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
