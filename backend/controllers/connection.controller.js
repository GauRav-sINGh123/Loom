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

export const rejectConnectionRequest = asyncHandler(async (req, res) => {
  const requestId = req.params.id; // ID of the connection request
  const userId = req.user._id; // ID of the current user
 
  const request = await Connection.findById(requestId)

  if(!request){
    return res.status(404).json({message:"Connection request not found"})
  }
     
  if(request.recipient._id.toString()!==userId.toString()){
    return res.status(401).json({message:"Unauthorized to reject this connection request"})
  }

  if(request.status!=="pending"){
    return res.status(400).json({message:"Connection request has already been accepted or rejected"})
  }

  request.status="rejected"
  await request.save()
  
  res.status(200).json({message:"Connection request rejected"})

  }
)


export const getAllConnectionRequests = asyncHandler(async (req, res) => {
  const userId = req.user._id; // ID of the current user

  const requests = await Connection.find({
    recipient: userId,
    status: "pending",
  }).populate("sender", "name email profilePicture bio username");

  res.status(200).json(requests);
});


export const getAllConnections = asyncHandler(async (req, res) => {
const userId=req.user._id

const connections=await User.findById(userId).populate("connections","name email profilePicture bio username")
 
if(!connections){
  return res.status(404).json({message:"Connections not found"})
}
res.status(200).json(connections)

})

export const removeConnection = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const connectionId = req.body.connectionId;

  // Remove the connection from the user's connections list
  await User.findByIdAndUpdate(userId, {$pull: { connections: connectionId }});
 
  // Remove the user from the connection's connections list
  await User.findByIdAndUpdate(connectionId, {$pull: { connections: userId }});

  res.status(200).json({ message: "Connection removed successfully" });

});

export const getConnectionStatus = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const connectionId = req.params.id;

  const currentUser =req.user
  if(currentUser.connections.includes(connectionId)){
    return res.status(200).json({status:"connected"})
  }
  const pendingRequest=await Connection.findOne(
     {
      $or: [
        { sender: userId, recipient: connectionId},
        { sender: connectionId, recipient: userId },
      ],
    }
  )

  if (pendingRequest) {
    if (pendingRequest.sender.toString() === userId.toString()) {
      return res.json({ status: "pending" });
    } else {
      return res.json({ status: "received", connectionId: pendingRequest._id });
    }
  }

  // if no connection or pending req found
  res.json({ status: "not_connected" });
});