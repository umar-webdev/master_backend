// require('dotenv').config()
import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";
import connectDB from "../src/db/index.js";
import dotenv from 'dotenv'
dotenv.config({
    path: './env'
})

connectDB()
