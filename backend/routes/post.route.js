import express from "express"
const router=express.Router()
import {isProtected} from '../middlewares/auth.middleware'
import { getAllPosts,createPost } from "../controllers/post.controller"

router.route('/posts').get(isProtected,getAllPosts)
router.route('/post').post(isProtected,createPost)
export default router