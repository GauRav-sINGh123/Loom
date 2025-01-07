import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import generateAccessAndRefereshTokens from '../utils/generateAccessAndRefereshTokens.js';
import User from '../models/user.model.js';

//Setting Up Cookies
const setCookies = (res, accessToken, refreshToken) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true, //prevent XSS attacks, cross-site scripting attacks
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", // prevents cross-site request forgery attacks CSRF
    maxAge: 15* 60 * 1000,
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true, //prevent XSS attacks, cross-site scripting attacks
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", // prevents cross-site request forgery attacks CSRF
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};



export const signup=asyncHandler(async(req,res)=>{

  const {email,password,fullName,username}=req.body;
  if ([email, fullName, username, password].some((field) => field?.trim() === "")) {
    return res.status(400).json(new ApiResponse(400, null, "All fields are required"));
  }
  const existingUser=await User.findOne({email});

  if (existingUser) {
    return res.status(400).json(new ApiResponse(400, null, "User already exists. Please login"));
  }
  const newUser=await User.create({
     email,
     fullName,
     username,
     password
  });
  if(!newUser){
    return res.status(500).json(new ApiResponse(500, null, "User creation failed"));
  } 

  return  res.status(201).json(new ApiResponse(200, {
    message: "User created successfully",
    _id: newUser._id,
    email: newUser.email,
    fullName: newUser.fullName,
    username: newUser.username,
    avatar: newUser.avatar,
    coverImage: newUser.coverImage,
    password: newUser.password,
    followers: newUser.followers,
    following: newUser.following,
  }))

})

