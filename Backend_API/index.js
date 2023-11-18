let express = require("express")
let { connection } = require("./db.js")
let { userRouter } = require("./Routes/User.Router")
let {PaymentRouter}=require("./Routes/Payment.Router")
let {ProductRouter} = require("./Routes/AdminProduct.Router")
let {adminAuthentication} = require("./middleware/admin.Authentication.middleware")
let {UserProductRouter}=require("./Routes/User.Product.Router")
let cors = require("cors")
const { request } = require("express")
require("dotenv").config()
let app = express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Welcome to server")
 })

app.use("/users", userRouter)




app.use("/Payment",PaymentRouter)
app.use("/admin",adminAuthentication,ProductRouter)

app.use("/Products",UserProductRouter)


app
app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("mongodb is connected")
    } catch (err) {
        console.log(err.message)
    }
    console.log("server is running on 469 port")
})
