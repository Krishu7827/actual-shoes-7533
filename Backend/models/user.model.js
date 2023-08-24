const mongoose= require("mongoose")
const useSchema= mongoose.Schema({
    name:String,
    email:String,
    password:String

},{
    versionKey:false
})

const UserModel=mongoose.model("user",useSchema)

module.exports={UserModel}