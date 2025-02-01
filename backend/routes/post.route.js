import express from "express"
const router=express.Router()
import {isProtected} from '../middlewares/auth.middleware'
import { getAllPosts,createPost,deletePost,getPost,createComments} from "../controllers/post.controller"

router.route('/posts').get(isProtected,getAllPosts)

router.route('/post').post(isProtected,createPost)

router.route("/post/:postId").delete(isProtected,deletePost)

router.route("/post/:postId").get(isProtected,getPost)

router.route('/:id/comment').post(isProtected,createComments)
export default router