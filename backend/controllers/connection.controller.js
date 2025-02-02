import { asyncHandler } from "../utils/asyncHandler.js";
import Connection from "../models/connection.model.js";

export const sendConnectionRequest = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const senderId = req.user._id;

  if (senderId.toString() === userId) {
    return res
      .status(400)
      .json({ message: "You cannot send a connection request to yourself" });
  }

  if (req.user.connections.includes(userId)) {
    return res
      .status(400)
      .json({ message: "You are already connected to this user" });
  }

  const existingRequest = await Connection.findOne({
    sender: senderId,
    recipient: userId,
    status: "pending",
  });

  if (existingRequest) {
    return res.status(400).json({ message: "Connection request already sent" });
  }

  const connectionRequest = await Connection.create({
    sender: senderId,
    recipient: userId,
  });

  if (!connectionRequest) {
    return res.status(400).json({ message: "Connection request failed" });
  }

  res.status(201).json({ message: "Connection request sent" });
});
