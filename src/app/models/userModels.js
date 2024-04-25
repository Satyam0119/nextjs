import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required : true,
        unique : true , 
        lowercase:true, 
    },
    email:{
        type:String,
        required : true,
        unique : true , 
    },
    password:{
        type:String,
        required : true,
    },
    isVarified:{
        type:Boolean;
        default:false,
    },
    isAdmin:{
        type:Boolean;
        default:false,
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    varifyToken:string,
    varifyTokenExpiry:Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User