import { hashSync } from "bcryptjs"
import { SYS_ROLE } from "../../common/index.js"
import { encription } from "../../common/utils/encryption.utilts.js"
import { checkuserexist, createUser } from "../users/users.sevuce.js"
import { otprepository } from "../../db/models/users/otp/otp.repository.js"






export const signup=async(body)=>{


const { email, phoneNumber } = body
const userexist=await checkuserexist({
    $or:[
        {email:{$eq:email,$exists:true,$ne:null}},
        {phoneNumber:{$eq:phoneNumber,$exists:true,$ne:null}}
    ]
})


if (userexist) throw new ConfluctsException(SYS_MESSAGE.user.alreadyexist)

body.role = SYS_ROLE.user
body.passward = await hashSync(body.passward)
if (body.phoneNumber) {
    body.phoneNumber = encription(phoneNumber)
}

   /////otp << vertify << craete user
      const otp =Math.floor(100000 + Math.random()*900000)
      await otprepository.create({
        email,
        otp,
        expiresat: Date.now() + 1*60*1000
      })
   
       
  return await createUser  (body)
}