import express from "express"
const router = express.Router()
import {isProtected} from "../middlewares/auth.middleware.js"
import {getSuggestedUsers,getUserProfile} from "../controllers/user.controller.js"

router.route('/suggested_users').get(isProtected,getSuggestedUsers)

router.route('/:username').get(isProtected,getUserProfile)

export default router