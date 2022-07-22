const express = require('express')
const asyncify = require('express-asyncify')
const db = require('../../db')

const api = asyncify(express.Router())
let services, Task

api.use('*', async (req, res, next) => {
    if (!services) {
        try {
            services = await db()
        } catch (e) {
            next(e)
        }
        Task = services.Task
    }
    next()
})

api.get('/listTask', async (req, res, next) => {
    let result
    try {
        result = await Task.list()
        if (result){
            res.send(result)
        }
    }catch (e) {
        return next(e)
    }
})

api.post('/createTask', async (req, res, next)=>{
    const model = req.body
    console.log('model', model)
    let result
    try {
        result = await Task.create(model)
        if (result){
            res.send(result)
        }
    }catch (e) {
        return next(e)
    }
})

api.post('/updateTask/:idTask', async (req, res, next)=>{
    const model = req.body
    const id = req.params
    console.log('id', req.params)
    console.log('model', model)
    let result
    try {
        result = await Task.update(model, id)
        if (result){
            res.send(result)
        }
    }catch (e) {
        return next(e)
    }
})

module.exports = api
