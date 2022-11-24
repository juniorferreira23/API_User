const jwt = require('jsonwebtoken')

const user = {
    name: 'junior',
    email: 'junior@teste.com',
    password: '123456'
}

const secret = 'segredo'
const timeToExpire = 40

const createToken = (payload) =>{

    try {
        const token = jwt.sign(payload, secret, {expiresIn: timeToExpire})
        console.log(token)
    } catch (error) {
        console.log(error)
    }
}

const verificationToken = (token) => {

    try {
        const validToken = jwt.verify(token, secret)
        console.log(validToken)
    } catch (error) {
        console.log(error)
    }    
}

// createToken(user)
// verificationToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoianVuaW9yIiwiZW1haWwiOiJqdW5pb3JAdGVzdGUuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE2NjkwNzYzMDEsImV4cCI6MTY2OTA3NjM0MX0.FUBxf0enubzS44hyhMGoIhqz9ZyD4C8X3-anaWOJ344')