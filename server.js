// IMPORTS
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const bcrypt = require('bcrypt')
const session = require('express-session')

// MIDDLEWARE
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.json())
require('dotenv').config()
app.use(
    session({
      secret: 'Testing123', //a random string do not copy this value or your stuff will get hacked
      resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
      saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
    })
)

// Custom auth middleware
const isAuthenticated = (req, res, next) => {
    if(req.session.currentUser){
        next()
    } else {
        res.redirect('/user')
    }
}

//Importing Controllers
const seafoodController = require('./controllers/seafood.js')
const authRoutes = require('./controllers/authRoutes.js')
const clientRoute = require('./controllers/clinetRoute.js')
//MIDLEWRE TO PARSE DATA req.body obj
app.use(express.urlencoded({ extended: true }))


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

app.use('/client', clientRoute)

app.use('/user', authRoutes)

app.use('/seafoodstore', (req, res, next) => {
    next()
}, seafoodController)

app.get('/any', (req, res) => {
    req.session.anyProperty = 'something'
    res.redirect('/seafoodstore')
})
app.get('/retrieve', (req, res) => {
    if(req.session.anyProperty === 'something'){
        console.log('it is a match!')
    } else {
        console.log('it is not a match!')
    }
    res.redirect('/seafoodstore')
})
app.get('/updateSession', (req, res) => {
    req.session.anyProperty = 'not something'
    res.redirect('/seafoodstore')
})



app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
