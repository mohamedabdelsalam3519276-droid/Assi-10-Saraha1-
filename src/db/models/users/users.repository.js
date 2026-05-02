import { DbRepostory } from "../../db.repository.js";
import { User } from "./user.model.js";

class UserRepostory extends DbRepostory{
    constructor(){
        super(User)
    }
}
 export const userRepostory= new UserRepostory()
