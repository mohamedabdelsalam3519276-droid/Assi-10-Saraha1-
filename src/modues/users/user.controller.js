import {Router} from "express"
import { GetProfile } from "./users.sevuce.js"
import { NotFoundException, SYS_MESSAGE, verifyToken } from "../../common/index.js"
import { decription, encription } from "../../common/utils/encryption.utilts.js"
import jwt from "jsonwebtoken"
import { isauthnticated } from "../../middlewares/authntication.middleware.js"
const router= Router()

router.get("/",isauthnticated,(req,res,next)=>{
  const{user}=req
  if(user.phoneNumber){
    user.phoneNumber=decription(user.phoneNumber)
  }
 return res.status(200).json({message:"done",data:{user}})    
    
})

  

  




export default router



