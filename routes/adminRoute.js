const express = require('express')
const router = express.Router()
const { authenticationToken } = require('../controllers/authoController')

router.post('/', authenticationToken, (req, res) => {
    if(req.user.admin){
        res.send('acesso de admin')
    }else{
        res.status(400).send('Acesso negado')
    }
})

module.exports = router