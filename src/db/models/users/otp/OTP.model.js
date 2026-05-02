
import { model , Schema  } from "mongoose";
const scheme=new Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    expiresAt:{
        type:Date,

        index:{expires :0}
    }

})
export const OTP =model("OTP",scheme)