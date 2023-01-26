import express from "express"
import { login } from "../controllers/auth"

const router = express.Router()

router.post("/login", login) //this comes from auth so it would be auth/login

export default router