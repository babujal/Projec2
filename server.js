// IMPORTS
const express = require('express')
const methodOverride = require('method-override')
const app = express()


// MIDDLEWARE
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
//Importing Controllers
const seafoodController = require('./controllers/seafood.js')
//MIDLEWRE TO PARSE DATA req.body obj
app.use(express.urlencoded({ extended: true }))
//Setingup the cotrollers to be use with app.use
app.use('/seafoodstore', seafoodController)

require('dotenv').config()

const PORT = process.env.PORT || 3000

// setup database 
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI

// connect to mongo 
mongoose.connect(mongoURI)

const db = mongoose.connection
// optional create status messages to check mongo connection 
db.on('error', (err) => { console.log('ERROR: ' , err)})
db.on('connected', () => { console.log('mongo connected')})
db.on('disconnected', () => { console.log('mongo disconnected')})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
