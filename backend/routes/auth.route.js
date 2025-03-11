import express from 'express'
import { authCheck, login, logout, signup } from "../controllers/auth.contro.js";


const router = express.Router();


router.post('/signup',signup)
router.post('/logout',logout)
router.post('/login',login)
router.get('/authCheck',authCheck)




export default router;