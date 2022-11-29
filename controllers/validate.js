const joi = require('joi')

const validateRegister = (data) => {

    const schema = joi.object({
        name: joi.string().required().min(4).max(50),
        email: joi.string().required().min(10).max(50),
        password: joi.string().required().min(8).max(100)
    })

    return schema.validate(data)
}

const validateLogin = (data) => {

    const schema = joi.object({
        email: joi.string().required().min(10).max(50),
        password: joi.string().required.min(8).max(100)
    })

    return schema.validate(data)
}

module.exports.validateRegister = validateRegister
module.exports.validateLogin = validateLogin