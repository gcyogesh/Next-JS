import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const dataBase = process.env.DB
const Connection =()=>{
    mongoose.connect(dataBase).then(()=>{
        console.log("Databse Connected succesfully!")

    }).catch((error)=>{
            console.log(error, "Database got error")
    })

}

export default Connection;