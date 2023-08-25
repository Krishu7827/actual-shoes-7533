const express =require("express")
const passport= require("passport")
const googleStrategy=require("passport-google-oauth20")
const router= express.Router()
require("dotenv").config()


passport.use(new googleStrategy({
clientID:"389604519005-i3hrjk2mjdvva2aqa57ph0rcb8gd6hr6.apps.googleusercontent.com",
clientSecret:"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",
callbackURL:"/auth/google/callback",
scope: ["profile","email"]
},(accessToken,refreshToken,profile,done)=>{
   console.log("accessToken")
   console.log("refreshToken")
   console.log("profile")
}))
router.get("/auth/google",passport.authenticate("google",{
    scope: ["profile","email"]
}))
router.get("/auth/google/callback",passport.authenticate("google"))



module.exports={
    router
}