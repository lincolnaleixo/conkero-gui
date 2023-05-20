import { Router } from 'express'
import { grant, login, signup, token } from '../controllers/auth.js'
const router = Router()

// get
router.get('/grant', grant)

// post
router.post('/token', token)
router.post('/login', login)
router.post('/signup', signup)

export default router
