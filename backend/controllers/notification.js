import { asyncHandler } from '../utils/asyncHandler.js'
import Notification from '../models/notification.model.js'

const getNotifications = asyncHandler(async (req, res) => {
  const userId=req.user._id

  const notifications=await Notification.find({user:userId})
  .sort({createdAt:-1})
  .populate("relatedUser", "name username profilePic")
  .populate("relatedPost", "image content")

  if(!notifications){
    return res.status(404).json({message:"No notifications found"})
  }

  res.status(200).json(notifications)
})