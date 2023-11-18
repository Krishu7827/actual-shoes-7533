let express = require("express")
let Jwt = require("jsonwebtoken")




let paymentAuthentication = (req, res, next) => {

    const token = req.headers.authorization

    let decoded = Jwt.verify(token, "Food")
      
    if (decoded) {

        req.body.UserID = decoded.UserID,
            req.body.UserName = decoded.UserName,
            req.body.UserEmail = decoded.UserEmail
           
        next()

    } else {

        res.send({ "msg": "First do login" })
    }
}


module.exports = { paymentAuthentication }