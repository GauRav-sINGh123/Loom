import { asyncHandler } from "../utils/asyncHandler.js";
import Connection from "../models/connection.model.js";
import User from "../models/user.model.js";
import Notification from "../models/notification.model.js";

export const sendConnectionRequest = asyncHandler(async (req, res) => {
  const userId = req.params.id; // ID of the user you want to connect
  const senderId = req.user._id; // ID of the current user

  // Check if the user is trying to send a connection request to themselves
  if (senderId.toString() === userId) {
    return res
      .status(400)
      .json({ message: "You cannot send a connection request to yourself" });
  }

  // Check if the user is already connected to the user they are trying to connect
  if (req.user.connections.includes(userId)) {
    return res
      .status(400)
      .json({ message: "You are already connected to this user" });
  }
 
  // Check if the user has already sent a connection request to the user they are trying to connect
  const existingRequest = await Connection.findOne({
    sender: senderId,
    recipient: userId,
    status: "pending",
  });

  if (existingRequest) {
    return res.status(400).json({ message: "Connection request already sent" });
  }

  //Create a new connection request
  const connectionRequest = await Connection.create({
    sender: senderId,
    recipient: userId,
  });

  if (!connectionRequest) {
    return res.status(400).json({ message: "Connection request failed" });
  }

  res.status(201).json({ message: "Connection request sent" });
});


export const acceptConnectionRequest = asyncHandler(async (req, res) => {
  const requestId = req.params.id; // ID of the connection request
  const userId = req.user._id; // ID of the current user
 
  const request = await Connection.findById(requestId)
  
  if(!request){
    return res.status(404).json({message:"Connection request not found"})
  }
 
  if(request.recipient._id.toString()!==userId.toString()){
    return res.status(401).json({message:"Unauthorized to accept this connection request"})
  }

  if(request.status!=="pending"){
    return res.status(400).json({message:"Connection request has already been accepted or rejected"})
  }

  request.status="accepted"
  await request.save()

  // Add the sender to the recipient's connections list

  await User.findByIdAndUpdate( request.sender._id, { $addToSet: { connections: userId } })
  await User.findByIdAndUpdate( userId, { $addToSet: { connections: request.sender._id} })

  const notification=new Notification({
    recipient:request.sender._id,
    type:"requestAccepted",
    relatedUser:userId
  })
 
  await notification.save()
  
  res.status(200).json({message:"Connection request accepted"})

})

