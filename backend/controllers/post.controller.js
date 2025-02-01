import Post from "../models/post.model.js"
import { asyncHandler } from "../utils/asyncHandler";
import cloudinary from "../utils/cloudinary.js";
import Notification from "../models/notification.model.js";

// Method to get all posts
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

// Method to create a post
export const createPost=async(req,res)=>{
   try {
    const {content,image}=req.body
     
    let newPost;
  
    //Uploads image to cloudinary if it exists
    if(image){
     const result= await cloudinary.uploader.upload(image)
     newPost= await Post({
         author:req.user._id,
         content,
         image:result.secure_url
     })
    }else{ //Creates a post without an image
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

// Method to delete a post
export const deletePost=asyncHandler(async(req,res)=>{
    const postId=req.params.id
    const userId=req.user._id
    
    const post=await Post.findById(postId)

    if(!post){
        return res.status(404).json({
            message:"Post Not Found"
        })
    }
   
    //Checks if current user is the owner or author of the post 
    if(post.author.toString() !== userId){
        return res.status(403).status("Unauthorized")
    }
   
    //Deletes the image from cloudinary if it exists
    if(post.image){
        await cloudinary.uploader.destroy(post.image.split("/").pop().split(".")[0])
    }
    await Post.findByIdAndDelete(postId)

    res.status(200).json({
        message:"Post Deleted"
    })
})

// Method to get a post
export const getPost=asyncHandler(async(req,res)=>{
    const postId=req.params.id

    const post=await Post.findById(postId)
    .populate("author", "name username profilePicture bio")
    .populate("comments.user", "name profilePicture username bio")

    if(!post){
        return res.status(404).json({
            message:"Post Not Found"
        })
    }
     
    res.status(200).json(post)
})

// Method To Create Comment 

export const createComments=asyncHandler(async(req,res)=>{
    const {postId}=req.paramas
    const {content}=req.body

    const post=await Post.findByIdAndUpdate(postId,{
        $push:{
            comments:{
                user:req.user._id,
                content
            }
        }
    },{new:true})

   if(!post){
       return res.status(404).json({
           message:"Comment Failed"
       })
   }

   //Notifies other users that a comment has been made
    if(post.author.toString()!==req.user._id){

        const notification=new Notification({
            recipient:post.author,
            type:"comment",
            relatedUser:req.user._id,
            relatedPost:postId
        })

        await notification.save() 
    }
    res.status(201).json(post)
})