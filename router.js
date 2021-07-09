const express = require("express")
const Router = express.Router()
const Api = require("./api/v1")


Router.use('/api/v1', Api);


module.exports = Router;