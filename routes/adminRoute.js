const express = require('express')
const router = express.Router()
const { authenticationToken } = require('../controllers/authoController')

router.get('/', authenticationToken, (req, res) => {
    res.send('acesso de admin')
})

module.exports = router