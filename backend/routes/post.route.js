import express from "express"
const router=express.Router()
import {isProtected} from '../middlewares/auth.middleware'

router.route('/posts').get(isProtected,getAllPosts)
router.route('/post').post()
export default router