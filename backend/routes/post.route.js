import express from "express"
const router=express.Router()
import {isProtected} from '../middlewares/auth.middleware'
import { getAllPosts,createPost,deletePost} from "../controllers/post.controller"

router.route('/posts').get(isProtected,getAllPosts)

router.route('/post').post(isProtected,createPost)

router.route("/post/:postId").delete(isProtected,deletePost)
export default router