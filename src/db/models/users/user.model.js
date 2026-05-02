
import { model, Schema } from "mongoose";
import { SYS_GENDER, SYS_ROLE } from "../../../common/index.js";

const schema= new Schema(
  
  {

  userName:{
    
    
    type:String,

    required:true,
    minlength:2,
    maxlength:20,
    trim:true,
    uppercase:true, // delete spaces in begging and ending
},
 phoneNumber:{
    type:String,
    required: function () {
    return !this.email
   
},
 },
    



  email:{
    
    
    type:String,
    required: function () {
    return !this.phoneNumber
    },
    trim:true,
    lowercase:true,






  },




  passward:{
    type:String,
    required:true
},
  gender:{type:Number,
    enum:Object.values (SYS_GENDER)
    ,default:SYS_GENDER.male

},
  role:{
    
    
    type:String,
    enum:Object.values(SYS_ROLE),
    default:SYS_ROLE.user

}},



{timestamps:true}) 

//schema.path("email").validate(function () {
  //return !!(this.email || this.phoneNumber);
//}, "Either email or phoneNumber is required.");

//schema.path("phoneNumber").validate(function () {
  //return !!(this.email || this.phoneNumber);
//}, "Either email or phoneNumber is required.");


 export const User= model("User",schema)






