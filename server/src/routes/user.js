import { Router } from 'express'
import { userWithToken } from '../controllers/user'
const router = Router()

// get
router.get('/token', userWithToken)


export default router
