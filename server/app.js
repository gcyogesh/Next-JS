import express from 'express';
import dotenv from 'dotenv'
import Connection from './database/Connection.js'



const app = express();
dotenv.config();

const port = process.env.PORT;


Connection();

app.listen(port, (req,res)=>{
    console.log(`Server is runnning on http://localhost:${port} `)
})
