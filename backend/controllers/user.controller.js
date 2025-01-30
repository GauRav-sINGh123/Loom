import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import cloudinary from "../utils/cloudinary.js";


export const getSuggestedUsers=asyncHandler(async(req,res)=>{
    const currentUser = await User.findById(req.user._id).select("connections");

    if(!currentUser){
        return res.status(404).json({
            message:"User not found"
        })
    }

    const suggestedUsers = await User.find({
        _id: { $ne: req.user._id, $nin: currentUser.connections },
         
      })
      .limit(5)
      .select("name username profilePicture");
   
      if(!suggestedUsers){
        return res.status(404).json({
            message:"Users not found"
        })
      }

    res.status(200).json({
        success: true,
        suggestedUsers,
    })
})


export const getUserProfile=asyncHandler(async(req,res)=>{
    const username=req.params.username;
    const user = await User.findOne({username}).select("-password");
    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }

    res.status(200).json({
        user
    })
})

export const updateUserProfile = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const updates = req.body; // Extract all fields from request body
     
    if(req.body.profilePicture){
        const result=await cloudinary.uploader.upload(req.body.profilePicture)
        updates.profilePicture=result.secure_url
    }

    if(req.body.bannerImage){
        const result=await cloudinary.uploader.upload(req.body.bannerImage)
        updates.bannerImage=result.secure_url
    }
    // Remove any undefined or empty fields
    for (const key in updates) {
        if (updates[key] === undefined || updates[key] === "") {
            delete updates[key];
        }
    }

    const user = await User.findByIdAndUpdate(userId, updates, {
        new: true,
        runValidators: true,
    }).select("-password");

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user, message: "User updated successfully" });
});
