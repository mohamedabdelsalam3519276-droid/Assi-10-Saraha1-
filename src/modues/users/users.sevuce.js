import { userRepostory } from "../../db/index.js"


 export const checkuserexist=async(filter)=>{
 
    return await userRepostory.getOne(filter)
  

}
export const createUser=async(DataUser)=>{
    return await userRepostory.create(DataUser)
}

export const GetProfile=async(filter)=>{
    return await userRepostory.getOne(filter)
}

