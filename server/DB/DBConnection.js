import mongoose from "mongoose";

export const connection = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        dbName:"MERN_AUTHENTICATION"
    }).then(()=>{
        console.log("connect to database");
        
    }).catch(err=>{
        console.log(`Some error occured while connection to database: ${err}`);
        
    })
}