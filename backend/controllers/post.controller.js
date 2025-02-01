import Post from "../models/post.model.js"
import { asyncHandler } from "../utils/asyncHandler";



export const getAllPosts=asyncHandler(async(req,res)=>{
    const posts=await Post.find({author:{$in:req.user.connections}})
    .populate("author", "name username profilePicture bio")
    .populate("comments", "name profilePicture")
    .sort({createdAt:-1})

    if(!posts){
        return res.status(404).json({
            message:"Post Not Found"
        })
    }
    res.status(200).json(posts)
})