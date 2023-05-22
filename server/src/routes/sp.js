import { Router } from 'express'
import { init } from '../controllers/sp'
const router = Router()

// get
router.get('/init', init)



export default router
