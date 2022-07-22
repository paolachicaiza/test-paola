const express = require('express')
const asyncify = require('express-asyncify')
const db = require('../../db')

const api = asyncify(express.Router())
let services, User

api.use('*', async (req, res, next) => {
    if (!services) {
        try {
            services = await db()
        } catch (e) {
            next(e)
        }
        User = services.User
    }
    next()
})

api.post('/authUser', async (req, res, next) => {
    const model = req.body
    let result
    try {
        result = await User.authUser(model)
        if (result){
            res.send(result)
        }
    }catch (e) {
        return next(e)
    }
})

module.exports = api
