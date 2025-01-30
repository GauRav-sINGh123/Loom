import express from "express"
const router = express.Router()
import {isProtected} from "../middlewares/auth.middleware.js"
import {getSuggestedUsers} from "../controllers/user.controller.js"

router.route('/suggested_users').get(isProtected,getSuggestedUsers)

export default router