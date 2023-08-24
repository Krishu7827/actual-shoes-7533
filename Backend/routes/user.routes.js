const express =require("express")
const bcrypt=require("bcrypt")
const userRoute=express.Router()
const jwt= require("jsonwebtoken")
const { UserModel } = require("../models/user.model")

// Register
userRoute.post("/Register", async (req, res) => {
    try {
      console.log(req.body)
      const { name, email, password } = req.body
      const signdata = await UserModel.find({ email })
      if (signdata.length == 0) {
        bcrypt.hash(password, 5, async (err, hash) => {
          if (!err) {
            let data = { name, email, password: hash }
            const usedata = new UserModel(data)
            await usedata.save();
            res.send({ "msg": "Successfully Signed Up" })
          } else {
            console.log(err);
            res.send({ "msg": "something wrong in hashing" })
          }
        })
      } else {
        res.send({ "msg": "you have been already Signed Up" })
      }
    } catch (error) {
      console.log(error);
      console.log("something went wrong");
      res.send({ "error": error })
    }
  })

userRoute.post("/login",async(req,res)=>{
    try {
        const {email,password}= req.body
        let findmail=await UserModel.find({email})
        if(findmail.length===1){
            bcrypy.compare(findmail[0]).password,password,(error,result)=>{
                if(error){
                    res.send({"msg": "wrong password"})

                }else{
                    const token=jwt.sign({dataid:findmail[0]._id,email},process.env.token_secret)
                    res.send({"msg":"successfully login",token})
                }
            }
        }

    } catch (error) {
        
    }
})
