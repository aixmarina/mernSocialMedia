import express from "express"
import {
  addRemoveFriend, getUser,
  getUserFriends
} from "../controllers/users.js"
import { verifyToken } from "../middleware/auth.js"

const router = express.Router()

// READ
router.get("/:id", verifyToken, getUser) //this will be /users/some id
router.get("/:id/friends", verifyToken, getUserFriends)

// UPDATE
router.patch("/:id/:friendId", verifyToken, addRemoveFriend)

export default router