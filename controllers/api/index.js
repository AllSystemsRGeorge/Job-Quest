const router = require('express').Router()
const userRoute = require('./user-routes')
router.use('/users',userRoute)
module.exports= router