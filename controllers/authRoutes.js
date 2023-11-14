const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const NewUser = require('../models/users.js')

router.get('/', (req, res) => {
    res.render('login.ejs')
})

router.post('/login', async (req, res) => {
  try {
      console.log('Request Body:', req.body)
      // Check if username is provided in the request body
      if (!req.body.Username) {
          return res.status(400).send('Username is required.');
      }

      const foundUser = await NewUser.findOne({ username: req.body.Username.toLowerCase() });
      console.log('Found User:', foundUser);

      if (foundUser) {
          const isAMatch = bcrypt.compareSync(req.body.password, foundUser.password);
          console.log('Password Match:', isAMatch);

          if (isAMatch) {
              console.log('Login successful');
              req.session.currentUser = foundUser;
              res.redirect('/seafoodstore');
          } else {
              res.status(500).send('Username or password does not match or does not exist.');
          }
      } else {
          res.status(500).send('Username or password does not match or does not exist.');
      }
  } catch (err) {
      console.log(err);
      res.status(500).send('An error occurred during login.');
  }
});


module.exports = router