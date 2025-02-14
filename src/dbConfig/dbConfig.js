import { error } from "console";
import mongoose from "mongoose";
import { connected } from "process";


export async function connect() {
    try{

        mongoose.connect(process.env.MONGO_RUL)
        const connection = mongoose.connection;
        connection.on('connected', ()=>{
            console.log('MongoDB Connected')
        })

        connection.on('error', (err)=>{
            console.log("mongo db connection error make sure db up and running")
            process.exit()
        })



    }catch(error){
        console.log("Something wen wrong in connecting to db")
        console.log(error)
    }
}