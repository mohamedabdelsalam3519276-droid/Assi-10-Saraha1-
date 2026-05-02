import { Schema } from "mongoose"
import { badrequestexception, SYS_GENDER, SYS_ROLE } from "../common/index.js"
import { loginscheme, signupscheme } from "../modues/auth/auth.validation.js"
import Joi from "joi"

export const isvalid=(Schema)=>{
    return(req,res,next)=>{
        
        
          const validationresult= Schema.validate(req.body,{abortEarly:false})
               if (validationresult.error) {
             let errormessages=validationresult.error.details.map((err)=>{
             return {message:err.message,path:err.path[0]}
           })
              
           throw new badrequestexception ("validation failed",errormessages)
        }
        next()

    }
}

 export const generalfields={
  userName:Joi.string().min(2).max(20).trim().messages({"any.required":"userName is required"}).required(),
  email:Joi.string().pattern(/^\w{1,100}@(gmail|icloud|yahoo){1}(.com|.su|.edu|.eg){1,3}$/),
  phoneNumber:Joi.string().pattern(/^(0020|01|\+201)[0125]{1}[0-9]{8}$/),
  gender:Joi.number().valid(...Object.values(SYS_GENDER)).default(0).messages({}),
  role:Joi.number().valid(...Object.values(SYS_ROLE)).default(0).messages({"any.only":"role must be one of[1,2,3]"}),
  passward:Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
).required(),
  repassward:Joi.string().valid(Joi.ref("passward")).messages({"any.only":"repassward must be match passward"})
 }



