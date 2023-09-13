const express = require('express')
const router = express.Router()
//Requiring the fish model
const Seafoods = require('../models/seafood.js')

// INDEX ROUTE (OWNER)
router.get('/', async (req, res)=>{
    const foundSeafood = await Seafoods.find({})
    // console.log(foundSeafood)
    res.render('index.ejs', {
        seaFoods: foundSeafood
    });
});

//INDEX ROUTE (CLIENT)
router.get('/stock', async (req, res)=>{
    const foundSeafood = await Seafoods.find({})
    // console.log(foundSeafood)
    res.render('indexclient.ejs', {
        seaFoods: foundSeafood
    });
});

//SHOW ROUTE (CLIENT)
router.get('/stock/:id', async (req, res) => {
    const foundSeafood = await Seafoods.findById(req.params.id)
    // console.log(foundSeafood)
    res.render('showclient.ejs', {
        seaFood: foundSeafood
    })
})

//SHOW ROUTE (OWNER)
router.get('/:id', async (req, res) => {
    const foundSeafood = await Seafoods.findById(req.params.id)
    // console.log(foundSeafood)
    res.render('show.ejs', {
        seaFood: foundSeafood
    })
})

module.exports = router