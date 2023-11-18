let express=require("express")
let app=express()

let adminAuthentication=(req,res,next)=>{
 // console.log(req.headers)
    let adminPassword = req.headers.authorization

  // console.log(adminPassword)

    if(adminPassword=="Krishu7827"){

    next()

    }else{

      res.status(400).send({"msg":"You are not admin, this is Protected Router. Only admin Can access"})

    }


}

module.exports={adminAuthentication}