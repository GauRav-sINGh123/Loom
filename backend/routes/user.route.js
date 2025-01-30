import express from "express"
const router = express.Router()
import {isProtected} from "../middlewares/auth.middleware.js"
import {getSuggestedUsers,getUserProfile,updateUserProfile} from "../controllers/user.controller.js"

router.route('/suggested_users').get(isProtected,getSuggestedUsers)

router.route('/:username').get(isProtected,getUserProfile)

router.route('/profile').put(isProtected,updateUserProfile)

export default router