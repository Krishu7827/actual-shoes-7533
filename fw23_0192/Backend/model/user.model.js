
const mongoose = require("mongoose")


const userschema = new mongoose.Schema({
    id:{type:Number},
    name: { type: String, required: true },
  img: { type: String, default: '' },
  email : { type: String, required: true, unique: true },
  phone_number: { type: String },
  address: { type: String },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  specialist: { type: String },
  availability: [{
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    date: { type: Date, required: true }
  }]

})

const user = mongoose.model("user",userschema)

module.exports = {
    user
}