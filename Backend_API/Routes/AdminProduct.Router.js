let express = require("express")
let { productModel } = require("../models/AdminProduct.Model")

let ProductRouter = express.Router()
ProductRouter.use(express.json())



ProductRouter.get("/", async (req, res) => {



    try {

        let product = await productModel.find(req.query)

        res.send(product)

    } catch (err) {

        res.send({ "msg": "error" })


    }


})

ProductRouter.post("/add", async (req, res) => {

    let { img, dishName, Description, type, Price } = req.body

    if (img, dishName, Description, type, Price) {

        await productModel.insertMany({ img, dishName, Description, type, Price })



        res.send({ "msg": "Product added" })

    } else {

        res.status(400).send({ "msg": "enter entire detail" })

    }

})


ProductRouter.patch("/update/:Id", async (req, res) => {

    let ProductId = req.params.Id

    let payload = req.body


    try {

        await productModel.updateOne({ _id: ProductId }, { $set: payload })

        res.send({ "msg": "Product Updated" })

    } catch (err) {

        res.status(400).send({ "msg": err.message })

    }
})


ProductRouter.delete("/delete/:Id", async (req, res) => {

    let ProductId = req.params.Id

    try {

        await productModel.deleteOne({ _id: ProductId })

        res.send({ "msg": "Product Deleted" })

    } catch (err) {

        res.send({ "msg": "error" })

    }

})



module.exports = { ProductRouter }