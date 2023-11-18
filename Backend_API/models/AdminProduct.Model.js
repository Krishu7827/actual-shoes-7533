let mongoose=require("mongoose")


let productSchema=mongoose.Schema({

    img:String,
    dishName:String,
    Description:String,
    type:String,
    Price:Number

},{
    versionKey:false
})

let productModel=mongoose.model("Product",productSchema)

module.exports={productModel}



