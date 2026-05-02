import mongoose from "mongoose";
export function connectiondb() {
    mongoose.connect("mongodb://localhost:27017/Saraha-app1").then(()=>{
     console.log("db connect sucessfully")
    }).catch(err=>{
        console.log("no connection with database")
    })
    
}