const { apiConfig } = require('./../config')
const jwt = require('jsonwebtoken')

sign = (payload) => {
    return jwt.sign(payload, apiConfig.secret, { expiresIn: '3h' })
}

verify = (payload) => {
    return jwt.verify(payload, apiConfig.secret)
}

module.exports = { sign, verify }
