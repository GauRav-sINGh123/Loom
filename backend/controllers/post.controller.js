import Post from "../models/post.model.js"
import { asyncHandler } from "../utils/asyncHandler";
import cloudinary from "../utils/cloudinary.js";


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

export const createPost=async(req,res)=>{
   try {
    const {content,image}=req.body
     
    let newPost;
 
    if(image){
     const result= await cloudinary.uploader.upload(image)
     newPost= await Post({
         author:req.user._id,
         content,
         image:result.secure_url
     })
    }else{
      newPost= new Post({
         author:req.user._id,
         content,
      })
    }
    
    await newPost.save()

    res.status(201).json(newPost)
   } catch (error) {
     res.status(500).json("Failed To Create Post")
   }
}