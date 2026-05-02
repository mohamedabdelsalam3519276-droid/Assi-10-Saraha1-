import  express  from "express";
import { connectiondb } from "./db/connection.js";
import { AuthRouter, UserRouter } from "./modues/index.js";
import { decription, encription } from "./common/utils/encryption.utilts.js";
const app = express()
const port=5000
connectiondb()
app.use(express.json())
app.use("/user",UserRouter)
app.use("/auth",AuthRouter)
// global error handling middleware
app.use((error,req,res,next)=>{
if (error.message=="jwt expired") {
  error.message="time is ended"
    
}
 return res.status(error.cause || 500).json({message:error.message,stack:error.stack,details:error.details})
})





app.listen(port,()=>{
    console.log("apllication is working on port" ,port)
})

