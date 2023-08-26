
const express = require("express")
require("dotenv").config()
const {connections} = require("../Backend/config/db")
const {userRouter} = require("../Backend/Routes/user.routes")

const app = express()
app.use(express.json())



app.use('/user',userRouter)



app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

app.listen(process.env.port,async()=>{
    try{
        await connections
        console.log("connected to the db")
    }
    catch(err){
        console.log("not connected")
    }
    console.log(`port is running at the ${process.env.port}`)
})