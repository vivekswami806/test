let express = require('express')
const userController = require('../userController')
  let route =express.Router()
  route.post("/",userController)
module.exports =route