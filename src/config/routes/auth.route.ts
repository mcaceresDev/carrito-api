import { Router } from "express";
import AuthController from "../../Controllers/auth.controller";

const router = Router()
const authController = new AuthController

router.post('/signin', authController.signIn)
router.post('/signup', authController.signUp)



export default router