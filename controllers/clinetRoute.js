// updateController.js
const express = require('express');
const router = express.Router();
const Seafoods = require('../models/seafood.js');

// New Update posts route
router.get('/client', async (req, res)=>{
  const foundSeafood = await Seafoods.find({})
  // console.log(foundSeafood)
  res.render('indexclient.ejs', {
      seaFoods: foundSeafood
  });
});

module.exports = router;
