import  {Schema, model} from "mongoose";
import bycrpt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
   username:{
       type:String,
       required:true,
       unique:true
   },
   fullName:{
       type:String,
       required:true
   },
   email:{
       type:String,
       required:true,
       unique:true
   },
   password:{
       type:String,
       required:true,
       minLength:6
   },
   coverImage:{
       type:String,
       default:""
   },
   avatar:{
       type:String,
       default:""
   },
   following:[{
       type:Schema.Types.ObjectId,
       ref:"User",
       default:[]
   }],
   followers:[{
       type:Schema.Types.ObjectId,
       ref:"User",
       default:[]
   }],
   bio:{
       type:String,
       default:""
   },
   link:{
       type:String,
       default:""
   },
   refreshToken:{
    type:String
 }
},{timestamps:true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    
    this.password=await bycrpt.hash(this.password,10);
     next();
 })
 
 userSchema.methods.isPasswordCorrect = async function(password){
    return await bycrpt.compare(password, this.password)
 }

 userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
 }
 userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
 }
const User=model("User",userSchema);

export default User