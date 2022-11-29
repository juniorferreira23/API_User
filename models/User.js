const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {type: String, required: true, minlength: 4, maxlength: 50},
    email: {type: String, required: true, minlength: 10, maxlength: 50},
    password: {type: String, required: true, minlength: 8, maxlength: 100},
    admin: {type: Boolean, default:false},
    createDat: {type: Date, default: Date.now}
})

const User = new mongoose.model('User', userSchema)

module.exports = User