import joi from "joi"
import { SYS_GENDER, SYS_ROLE } from "../../common/index.js"
import { generalfields } from "../../middlewares/validation.middlewares.js"

export const signupscheme=joi.object({
userName:generalfields.userName

,email:generalfields.email,
phoneNumber:generalfields.phoneNumber,
gender:generalfields.gender,
role:generalfields.role,
passward:generalfields.passward,
repassward:generalfields.repassward
})
.or("email","phoneNumber").
required()


export const loginscheme=joi.object({
  email:generalfields.email,

  passward:generalfields.passward
}).required()
