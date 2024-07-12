const express = require("express");
const cors = require("cors")

//import de rutas
const Mercado_Pago = require("./router/Mercado_Pago.js")

//Inicializacion de express
const server = express();

//Proxy / middleware
server.use(express.json())
server.use(cors())
server.use("/Mercado_Pago" , Mercado_Pago)


module.exports = server;