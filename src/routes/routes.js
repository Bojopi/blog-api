const express = require('express')
const router = express.Router()

const categoria = require('../models/categoria')

router.get('/', async (req, res) => {
    const categorias = await categoria.find()
    console.log(categorias)
    res.json(categorias)
})

router.post('/', async (req, res) => {
    console.log(req.body)
})

module.exports = router