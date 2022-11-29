const UserModel = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validateRegister, validateLogin } = require('./validate')

const salt = bcrypt.genSaltSync(14)

const userControllers = {

    register: async function(req, res) {

        const { error } = validateRegister(req.body)
        if(error){ return res.status(400).send(error)}

        const selectUser = await UserModel.findOne({email: req.body.email})

        if(selectUser){
            res.status(400).send('E-mail já existe')
        }else{ 
            const user = new UserModel ({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, salt)
            })
            
            try {
                await user.save()
                res.send(user)
            } catch (error) {
                res.status(400).send(error)
            }
        }
    },

    login: async function(req, res){

        const { error } = validateLogin(req.body)
        if(error) { return res.status(400).send(error)}

        const selectUser = await UserModel.findOne({email: req.body.email})

        if(selectUser){
            const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectUser.password)

            if(passwordAndUserMatch){
                try {
                    const token = jwt.sign({id:selectUser._id, admin:selectUser.admin}, process.env.TOKEN_SECRET)
                    res.header('authorization-token', token)
                    res.send('Usuário logado')
                } catch (error) {
                    res.status(500).send('Erro ao criar o token' + error)
                }
                
            }else{
                res.status(400).send('E-mail ou senha incorreto')
            }
            
        }else{
            res.status(400).send('E-mail ou senha incorreto')
        }
    }
}

module.exports = userControllers