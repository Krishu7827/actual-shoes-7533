const express= require("express")
const { connection } = require("./configs/db")
const userRoute =require("./routes/user.routes")
const cors= require("cors")
const app=express()
require('dotenv').config()

app.use(cors())
app.use(express.json())


// app.use(userRoute)




app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("DB is connected")
    } catch (error) {
        console.log("Db is not connected")   
    }
    console.log(`running at ${process.env.port}`);
})
 

