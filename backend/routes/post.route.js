import express from "express"
const router=express.Router()
import {isProtected} from '../middlewares/auth.middleware.js'
import { getAllPosts,createPost,deletePost,getPost,createComments,likePost} from "../controllers/post.controller.js"

router.route('/posts').get(isProtected,getAllPosts)

router.route('/post').post(isProtected,createPost)

router.route("/post/:postId").delete(isProtected,deletePost)

router.route("/post/:postId").get(isProtected,getPost)

router.route('/:id/comment').post(isProtected,createComments)

router.route('/:id/like').post(isProtected,likePost)

export default router