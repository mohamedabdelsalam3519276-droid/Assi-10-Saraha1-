import { verifyToken } from "../common/index.js";
import { userRepostory } from "../db/index.js";


export const isauthnticated= async (req,res,next)=> {
    const{authorization}=req.headers
    
    const payload=verifyToken
    (authorization,"jdsjkdhuadyduasydhdhjahfggyfyayfdyadfdf")
    //console.log({decoded})
    const user=await userRepostory.getOne({_id:payload.sub})
    if (!user) throw new NotFoundException(SYS_MESSAGE.user.notfound);
    req.user=user
    next()
}