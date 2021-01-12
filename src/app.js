const express = require('express')
const app = express()

const morgan = require('morgan')
const path = require('path')

// Settings
app.set('port', process.env.PORT | 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'views/resources')))

// Routes
app.use('/', require('./routes/employees.routes'))

module.exports = app
