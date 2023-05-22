import { Router } from 'express'
import { update, userWithToken } from '../controllers/user'
const router = Router()

// get
router.get('/token', userWithToken)


// post
router.post('/update', update)


export default router
