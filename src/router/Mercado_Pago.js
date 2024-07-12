const {Router} = require("express")
const mercadopago = require("mercadopago")
const dotenv = require("dotenv");

dotenv.config();

const Mercado_Pago = Router()


mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN ,
})



Mercado_Pago.post("/", async(req,res)=>{
    try {
        const producto = req.body

        const preference = {
            items:[
                {
                    title: 'Varios',
                    unit_price: Number(18000),
                    currency_id: "ARS",
                    quantity: 1,

                }
            ],
            back_urls: {
                success: "http:localhost:3000/success",
                failure: "http:localhost:3000/fail"
            },
        auto_return: "approved"
        };

        const response = await mercadopago.preferences.create(preference)
        console.log(response)
        res.status(200).json(response.response.init_point)


    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
})
module.exports = Mercado_Pago