const express = require('express')
const router = express.Router()
//Requiring the fish model
const Seafoods = require('../models/seafood.js')

// INDEX ROUTE 
router.get('/', async (req, res)=>{
    const foundSeafood = await Seafoods.find({})
    console.log(foundSeafood)
    res.render('index.ejs', {
        seaFood: foundSeafood
    });
});

module.exports = router