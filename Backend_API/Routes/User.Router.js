let express = require("express")
let { userModel } = require("../models/User.Model")
require("dotenv").config()
let nodemailer = require("nodemailer")
let jwt = require("jsonwebtoken")
let bcrypt = require("bcrypt")



let userRouter = express.Router()
let otp = {}
let verifyEmail;
let verifypassword;
let verifyname;


let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "bluearpon4567@gmail.com",
        pass: "dtaecorslfbtvqoq"
    },
    tls: {
        rejectUnauthorized: false,
    }
})

function generateOtp() {

    let OTP = Math.floor(Math.random() * (1000 - 1 + 1) + 7000)

    let onetime = OTP

    otp.OneTimePassword = onetime

    return OTP
}






//////////////register////////////////////

userRouter.post("/verifyEmail", async (req, res) => {

    let { name, email, password } = req.body

    let users = await userModel.find({ email })

    if (users.length !== 0) {

        res.send({ "message": "You are already exist User" })

    } else {

        let mailOptions = {
            from: "bluearpon4567@gmail.com",
            to: email,
            subject: "One Time Verification(OTP)",
            html: `<body>
            <div style="font-family: Arial, sans-serif; font-size: 14px; color: #000000;">
              <p>Dear, ${name}</p>
              <p> I hope this email finds you well. As per your request, please find below your one-time password (OTP) to verify your identity and ensure the security of your account:</p>
              <p> <strong style="color: #ff0000;">${generateOtp()}</strong></p>
              <p>Please note that this OTP is valid for a limited time only, so we advise that you use it as soon as possible. If you have any questions or concerns regarding this OTP, please do not hesitate to contact us.</p>
              <p>Thank you for your trust in our services and for helping us maintain the security of your account.</p>
              <p>Best regards,</p>
              <p>The Verification Team</p>
            </div>
          </body>`



        }

        transporter.sendMail(mailOptions, async (err, success) => {

            if (err) {

                res.send({ message: "Email is wrong" })

            } else {


                res.send({ "message": "OTP has Sent Succesfully!!" })

                verifyEmail = email

                verifypassword = password

                verifyname = name



            }
        })
    }
})









userRouter.post("/register", async (req, res) => {

    let { OTP } = req.body

   

    if (Number(OTP) == otp.OneTimePassword && verifyEmail !== undefined && verifypassword !== undefined && verifyname !== undefined) {
        try {

            bcrypt.hash(verifypassword, 8, async (err, hash) => {

                let user = new userModel({ name: verifyname, email: verifyEmail, password: hash })

                user.save()

                res.send({ "message": "User Registered!!" })

            })

        } catch (err) {

            res.send({ "message": err.message })
        }

    } else {

        res.status(400).send({ "message": "OTP is Wrong, Please try again" })

    }

})

//////////////////login//////////////////

userRouter.post("/login", async (req, res) => {

    let { email, password } = req.body

    let user = await userModel.findOne({ email })

    if (user) {

        try {
            bcrypt.compare(password, user.password, function (err, result) {

                if (result) {

                    const token = jwt.sign({ UserID: user._id, UserName: user.name, UserEmail: user.email }, "Food")

              

                    res.send({ message: "login Successfull!!", "accesToken": token })

                } else {

                    res.send({ "message": "Wrong Crendtial!!" })

                }
            });

        } catch (err) {

            res.send({ "message": "Wrong Crendtial!!" })

        }
    } else {
        res.send({ message: "User doesn't Exists" })
    }

})


///////////////////////update///////////////////////////////

userRouter.post("/updateVerify", async (req, res) => {

    let { name, email, password } = req.body

    let user = await userModel.find({ email })

   

    if (user.length !== 0) {

        let mailOptions = {

            from: "bluearpon4567@gmail.com",
            to: email,
            subject: "Password Reset Request",

            html: `<body>
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #000000;">
          <p>Dear, ${name}</p>
          <p> We have received a request to reset the password for your account. Please use the following One Time Password (OTP) to reset your password:</p>
          <p> OTP: <strong style="color: #ff0000;">${generateOtp()}</strong></p>
          <p>To reset your password, please follow the steps below:</p>
          <br>
          <p>1. Go to the login page on our website.</p>
          <p>2. Click on the "Forgot Password" link.</p>
          <p>3. Enter your email address associated with your account.</p>
          <p>4. Enter the OTP provided in this email.</p>
          <p>5. Create a new password for your account.</p>

          <p>Please note that this OTP is valid for one-time use only and will expire in 10 minutes. If you did not request this password reset, please ignore this email. </p>
          <p>If you have any questions or need further assistance, please contact our support team at <a href="mailto:">Support@team</a>.</p>
          <p>Best regards,</p>
          <p>The Verification Team</p>
        </div>
      </body>`

        }

        transporter.sendMail(mailOptions, async (err, success) => {

            if (err) {

                res.send({ "message": "Email is wrong" })

            } else {
                verifyname = name

                verifyEmail = email

                verifypassword = password

                res.send({ "message": "OTP has sent" })
            }
        })

    } else {

        res.status(400).send({ "message": "We have no data about Your email, Please First register" })
    }

})


userRouter.patch("/update", async (req, res) => {

    let { OTP } = req.body

  

    if (Number(OTP) == otp.OneTimePassword && verifyEmail !== undefined && verifypassword !== undefined) {
        try {

            bcrypt.hash(verifypassword, 8, async (err, hash) => {

                await userModel.updateOne({ email: verifyEmail }, { password: hash })

                let mailOptions = {

                    from: "bluearpon4567@gmail.com",
                    to: verifyEmail,
                    subject: "Your Password Has Been Updated Successfully",
                    html: `<body>
                <div style="font-family: Arial, sans-serif; font-size: 17px; color: #000000;">
                  <p>Dear, ${verifyname}</p>
                  <p>I am writing to inform you that your password has been updated successfully. As part of our ongoing commitment to security, we encourage our clients to change their passwords regularly, and we are pleased to let you know that this update has been completed successfully.</p>
                  <p>Your new password is: <strong style="color:red;">${verifypassword}</strong>. Please ensure that you keep this password safe and secure. If you have any difficulties or concerns regarding your new password, please do not hesitate to get in touch with us and we will be happy to assist you.</p>
                  <p>We take the security of your account seriously and have implemented a number of measures to ensure that your information remains safe. We use advanced encryption technology to protect your data, and our team regularly monitors our systems to identify and prevent any potential security breaches.</p>
                  <p>Thank you for choosing us as your provider of Blue Apron. If you have any questions or feedback, please do not hesitate to get in touch with us.</p>
                  <p>Best regards,</p>
                  <p>The Verification Team</p>
                </div>
              </body>`

                }

                transporter.sendMail(mailOptions, async (err, success) => {

                    if (err) {

                        res.send({ "message": "Email is wrong" })

                    }
                })

                res.send({ "message": "Password Updated" })

            })

        } catch (err) {

            res.send({ "message": err.message })
        }

    } else {

        res.status(400).send({ "message": "OTP is Wrong, Please try again" })

    }

})










//////////////////////export ////////////
module.exports = { userRouter }
