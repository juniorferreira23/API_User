const jwt = require('jsonwebtoken')

 const authenticationToken = async (req, res, next) => {

    const token = req.header('authorization-token')
    if(!token) res.status(400).send('Ausencia de token')

    try {
        const validToken = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = validToken
        next()
    } catch (error) {
        res.status(400).send('token invalido')
    }
}

module.exports = { authenticationToken }