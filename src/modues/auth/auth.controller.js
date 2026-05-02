import { Router } from "express";
import { checkuserexist, createUser } from "../users/users.sevuce.js";
import {  badrequestexception, compare, ConfluctsException,    generatrTokens,    hash,    NotFoundException, SYS_GENDER, SYS_MESSAGE, SYS_ROLE, verifyToken } from "../../common/index.js";
import { encription } from "../../common/utils/encryption.utilts.js";
import jwt from "jsonwebtoken"
const router = Router()
import joi from "joi";
import { loginscheme, signupscheme } from "./auth.validation.js";
import { User } from "../../db/models/users/user.model.js";
import { isvalid } from "../../middlewares/validation.middlewares.js";
import { signup } from "./auth.service.js";















router.post("/singup",isvalid(signupscheme),async(req,res,next)=>{

 

     

 

   
      
   
       
const craeteduser= await signup(req.body)
return res.status(201).json({message:SYS_MESSAGE.user.craeted,data:{craeteduser}})

  
})



  











 


  

    




     






router.post("/login",isvalid(loginscheme),async(req,res,next)=>{

           

  const {email,passward}=req.body
  const userexist= await checkuserexist({email:{$eq:email,$exists:true,$ne:null}})
  if(!userexist)throw new NotFoundException("invalid credantional");
  const match = await compare(passward,userexist?.passward)
  if (!match) throw new NotFoundException("invalid credantional");

const{acsesstoken,refreshtoken}=  generatrTokens({sub:userexist._id,name:userexist.userName})

return res.status(201).json({message:"login sucessfully",data:{acsesstoken,refreshtoken}})


})



                 

router.get("/refresh_token",(req,res,next)=>{
 const{authorization}=req.headers
 const payload=verifyToken(authorization,"ijefjdfjhoeheuioeeueruireueruyrug")
 delete payload.iat
 delete payload.exp
const {acsesstoken,refreshtoken}=generatrTokens(payload)

return res.status(201).json({message:"token refresh sucess",data:{acsesstoken,refreshtoken}})
})
export 

 default router