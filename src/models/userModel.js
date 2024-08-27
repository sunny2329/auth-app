import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: [true,"please provide a username"],
        unique: true
    },
    email:{
        type:String,
        required: [true,"please provide a email"],
        unique: true,
    },
    password:{
        type:String,
        required: [true,"please provide a password"],
        minlength: [8,"password should be at least 8 characters long"]
    },
    isVerified:{
        type:Boolean,
        default: false
    },
    isAdmin:{
        type:Boolean,
        default: false
    },
    forgotPasswordToken : String,
    forgotPasswordTokenExpiration: Date,
    verifyToken:String,
    verifyTokenExpiration: Date
})


const User = mongoose.models.users || mongoose.models("User",userSchema);


export default User;