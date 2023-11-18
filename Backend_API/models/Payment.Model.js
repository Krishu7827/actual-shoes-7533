let mongoose = require("mongoose")

let PaymentSchema = mongoose.Schema({
    UserID: String,
    UserName: String,
    UserEmail: String,
    Address:String,
    Method: String
}, {
    versionKey: false
})


let PaymentModel = mongoose.model("Payment", PaymentSchema)

module.exports = { PaymentModel }