const express = require('express')
const morgan = require('morgan')
const path = require('path')
const { mongoose } = require('./database')

const app = express()

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewars
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use('/api/campus',require('./routes/routes'))

//Static files
// console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))

//Starting server

app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`)
})