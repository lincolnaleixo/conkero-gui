import { Router } from 'express'
import { forgot, login, reset, signup } from '../controllers/auth.js'
const router = Router()


// post
router.post('/login', login)
router.post('/signup', signup)
router.post('/forgot-password', forgot)
router.post('/reset-password', reset)

export default router
