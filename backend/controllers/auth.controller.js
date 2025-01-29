import { asyncHandler } from "../utils/asyncHandler.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { sendWelcomeEmail } from "../emails/email.handler.js";
import dotenv from "dotenv";

dotenv.config();

export const signin = asyncHandler(async (req, res) => {});

export const signup = asyncHandler(async (req, res) => {
  const { username, email, password, name } = req.body;

  // Check for missing fields
  if ([email, name, password, username].some((field) => !field?.trim())) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res
      .status(409)
      .json({ success: false, message: "User already exists" });
  }

  // Hash password
  if (password < 8) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
  }

  // Creates a new user
  const user = await User.create({ username, email, password, name });
  
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  
  if (!user) {
    return res
      .status(500)
      .json({ success: false, message: "User not created" });
  }

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  const profileUrl = `${process.env.CLIENT_URL}/${user.username}`;
 
  try {
    await sendWelcomeEmail(user.email, user.name,profileUrl);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(error.message);
  }

   res.status(201).json({
    success: true,
    message: "User created successfully",
  });
});

export const logout = asyncHandler(async (req, res) => {});
