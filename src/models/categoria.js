const mongoose = require('mongoose')
const { Schema } = mongoose

const Categoria = new Schema({
    nombre: { type: String, require: true }
})

module.exports = mongoose.model('Categoria', Categoria)