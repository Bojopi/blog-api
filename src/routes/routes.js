const express = require('express')
const router = express.Router()

const Categoria = require('../models/categoria')

router.get('/', async (req, res) => {
    const categorias = await Categoria.find()
    console.log(categorias)
    res.json(categorias)
})

router.post('/', async (req, res) => {
    const { nombre, descripcion } = req.body
    const categorias = new Categoria({ nombre, descripcion })
    await categorias.save();
    res.json({status: 'Categoria guardada'})
})

router.put('/:id', async (req, res) => {
    const { nombre, descripcion } = req.body
    const newCategoría = { nombre, descripcion}
    // Categoria.findByIdAndUpdate()
    console.log(req.params.id)
    res.json('recieved')
})

module.exports = router