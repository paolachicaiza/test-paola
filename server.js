const cors = require('cors')
const express = require('express')
const asyncify = require('express-asyncify')
const {apiConfig} = require('./config/index')
const taskRoute = require('./src/routes/task')
const userRoute = require('./src/routes/user')
const authmiddleware = require('./middleware/auth')
const app = asyncify(express())

app.use(cors())
app.use(express.json({limit:'60mb'}))
app.use(express.urlencoded({limit:'50mb'}))
app.use('/user', userRoute)
app.use(authmiddleware)
app.use('/task', taskRoute)

app.listen(apiConfig.port, ()=> {
    console.log(`server run port ${apiConfig.port}`)
})