let mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    Phone:Number
},{
    versionKey:false
})

let userModel=mongoose.model("User",UserSchema)

module.exports={userModel}