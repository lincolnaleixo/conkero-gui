import { Router } from 'express'
import { authorize, init } from '../controllers/ads'
const router = Router()

// get
router.get('/init', init)

// post
router.post('/authorize', authorize)


export default router
