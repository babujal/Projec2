const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/users.js')

router.get('/', (req, res) => {
    res.render('login.ejs')
})

router.post('/login', async (req, res) => {
    try {
      const foundUser = await User.findOne({user: req.body.user})
      if(foundUser) {
        const isAMatch = bcrypt.compareSync(req.body.password, foundUser.password)
        if(isAMatch) {
          console.log('login successful')
          req.session.currentUser = foundUser
          res.redirect('/seafoodstore')
        } else {
          res.status(500).send('Username or password does not match or does not exist.')
        }
      } else {
        res.status(500).send('Username or password does not match or does not exist.')
      }
    } catch (err) {
      console.log(err)
      res.status(500).send('Username or password does not match or does not exist.')
    }
})

module.exports = router