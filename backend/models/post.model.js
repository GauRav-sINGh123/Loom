import {Schema,model} from "mongoose";

const postSchema=new Schema({
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    content:{
        type:String,
    },
    image:{
        type:String
    },
    likes:[{
        type:Schema.Types.ObjectId,
        ref:"User"
    }],
     comments:[
        {
            content:{
                type:String,
            },
            user:{
                type:Schema.Types.ObjectId,
                ref:"User"
            },
            createdAt:{
                type:Date,
                default:Date.now
            }
        }
     ]
     
},{timestamps:true})

const Post=model("Post",postSchema);

export default Post