const mongoose = require('mongoose')
require('dotenv').config()


const connectDB = () => {
    mongoose.connect(process.env.MONGO_CONNECTION_URL, (error) => {
        if(error){
            console.log('Erro ao iniciar o banco de dados')
        }else{
            console.log('Banco de dados Iniciado com sucesso')
        }
    })
}

module.exports = connectDB