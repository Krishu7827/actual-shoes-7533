let express = require("express")
let { PaymentModel } = require("../models/Payment.Model")
let nodemailer=require("nodemailer")
let { paymentAuthentication } = require("../middleware/Payment.authentication.middleware")
let PaymentRouter = express.Router()

PaymentRouter.use(express.json())

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


PaymentRouter.use(paymentAuthentication)

PaymentRouter.post("/add", async (req, res) => {
          
    try{
        await PaymentModel.insertMany(req.body)

        let mailOptions = {
            from: "bluearpon4567@gmail.com",
            to: req.body.UserEmail,
            subject: "Payment Confirmation and Shipping Information",
            html: `<body>
            <div style="font-family: Arial, sans-serif; font-size: 15px; color: #000000;">
              <p>Dear, ${req.body.UserName}</p>
              <p> I am writing to confirm that we have received your payment for Order. We are pleased to inform you that your payment has been successfully processed and credited to your account.</p>
              <p> We appreciate your promptness in making the payment and thank you for your continued support. Our team is working hard to ensure that we provide you with the best possible service and products, and your timely payments help us achieve that goal.</p>
              <p>In regards to your recent purchase, we would like to confirm the shipping address for your order. Please confirm if the shipping address on file is correct or if you would like to update it. Your order will be shipped to the following address:</p>
              <p>${req.body.UserName}</p>
              <p>${req.body.Address}</p>
              <p>Payment Method:${req.body.Method}</p>
              <p>India</p>
              <p>Once again, thank you for your payment. We look forward to continuing our business relationship with you.</p>
              <p>Best regards,</p>
              <p>The Payment Team</p>
            </div>
          </body>`
    
        }

        transporter.sendMail(mailOptions, async (err, success) => {

            if (err) {

                res.send({ message: "Email is wrong" })

            } else {

              res.send({"msg":"Payment Success!!","email":req.body.UserEmail})
            
            }
        })

    }catch(err){

    }

   

})

 

     
       




module.exports={PaymentRouter}