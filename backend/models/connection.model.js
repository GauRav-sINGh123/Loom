import { Schema,model } from "mongoose";

const connectionSchema = new Schema({
    sender:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    recipent:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    status:{
        type:String,
        enum:['pending','accepted','rejected'],
        default:'pending'
    },
    
    createdAt:{
        type:Date,
        default:Date.now
    }
     
});

const Connection = model('Connection',connectionSchema);

export default Connection