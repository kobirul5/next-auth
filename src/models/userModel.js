import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
import { type } from "os";
import { emit } from "process";


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please Provide a username"],
        unique: true
    },
    email:{
        type: String,
        required: [true, "Please Provide a email"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Please Provide a password"],
        unique: true
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: String,
})

const User = mongoose.models.users || mongoose.model("users", userSchema)
export default User;