let express=require("express")
let Jwt=require("jsonwebtoken")

let app= express()


const Userauthentication=(req,res,next)=>{
    const token = req.headers.authorization
 
    if(token){

        let  decoded= Jwt.verify(token,"Food")


        if(decoded){

        

            next()

        }else{

            res.status(400).send({"message":"First do Login"})

        }
    }else{

        res.status(400).send({"message":"First do Login1"})

    }
}

module.exports={Userauthentication}