// require('dotenv').config()
import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";
import connectDB from "../src/db/index.js";
import dotenv from 'dotenv'
dotenv.config({
    path: './env'
})

connectDB()
.then(
    ()=>{
        app.listen(process.env.PORT || 8000,()=>{
            console.log("Server is running on port 8000");
        })
    }
).catch((err)=>{
    console.log('Mongo db connection failed',err)
})
