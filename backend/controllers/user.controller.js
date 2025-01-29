import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";


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