const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./configuration/connectionDB')
const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')

connectDB()
 
app.use('/', express.json(), userRoute)

app.use('/admin', adminRoute)

app.listen(process.env.PORT, (error) => {
    if(error){
        console.log('Erro ao iniciar o servidor')
        console.log(error)
    }else{
        console.log('Servidor rodando')
    }
})