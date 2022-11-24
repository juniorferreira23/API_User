const jwt = require('jsonwebtoken')


const authenticationToken = (req, res) => {
    const token = req.header('authorization-token')
    if(!token) res.status()
}

module.exports = { authenticationToken }