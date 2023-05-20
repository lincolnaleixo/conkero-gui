import { Router } from 'express'
import { forgot, grant, login, reset, signup, token } from '../controllers/auth.js'
const router = Router()

// get
router.get('/grant', grant)

// post
router.post('/token', token)
router.post('/login', login)
router.post('/signup', signup)
router.post('/forgot-password', forgot)
router.post('/reset-password', reset)

export default router
