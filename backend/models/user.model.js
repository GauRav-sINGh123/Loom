import {model, Schema} from "mongoose";
import bycrpt from "bcryptjs";

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String
    },
    bannerImage:{
        type:String
    },
    bio:{
        type:String
    },
    location:{
        type:String
    },
    connections:[
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    ]

},{timestamps:true});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    
    this.password=await bycrpt.hash(this.password,10);
    next();
 })
 
 userSchema.methods.isPasswordCorrect = async function(password){
    return await bycrpt.compare(password, this.password)
 }
 
const User = model("User", userSchema);

export default User