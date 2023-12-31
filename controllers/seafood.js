const express = require('express')
const router = express.Router()
const isAuthenticated = (req, res, next) => {
    if(req.session.currentUser){
        next()
    } else {
        res.redirect('/user')
    }
}
//Requiring the fish model
const Seafoods = require('../models/seafood.js')
// const updateController = require('./postRoute.js');
// router.use('/seafoodstore', updateController)


// Render Home Page
// router.get('/seafoodstore/auth', (req, res) => {
//     res.render('index.ejs')
// })

// INDEX ROUTE (OWNER)
router.get('/',isAuthenticated, async (req, res)=>{
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

//NEW ROUTE "creates new product"
router.get('/new', isAuthenticated, (req, res) => {
    res.render('new.ejs')
})

//SHOW ROUTE (CLIENT)
router.get('/stock/:id', async (req, res) => {
    const foundSeafood = await Seafoods.findById(req.params.id)
    // console.log(foundSeafood)
    res.render('showclient.ejs', {
        seaFood: foundSeafood
    })
})

//SHOW ROUTE (OWNER)
router.get('/:id', isAuthenticated, async (req, res) => {
    const foundSeafood = await Seafoods.findById(req.params.id)
    // console.log(foundSeafood)
    res.render('show.ejs', {
        seaFood: foundSeafood
    })
})

// EDIT ROUTE to render "edit.ejs" 
router.get('/:id/edit',isAuthenticated, async (req, res) => {
    const oundSeafood = await Seafoods.findById(req.params.id)
    console.log(oundSeafood)
    res.render('edit.ejs', {
        product: oundSeafood,
    })
})

//Shrimp name: Jumbo Tiger Shrimp
//Shrimps URL:https://www.seabinagroup.com/vnt_upload/product/05_2020/thumbs/1800_IMG_9421.jpg
//Shrimps description: Shrimp, the tiny treasures of the sea, are packed with big flavor. With their delicate, sweet taste and tender texture, shrimp are incredibly versatile in the kitchen. Whether you're tossing them into a pasta dish, skewering them for a barbecue, or savoring them in a zesty shrimp cocktail, these crustaceans add a delightful burst of seafood goodness to any meal. Enjoy the simplicity and deliciousness of shrimp in your culinary creations.

//POST ROUTE "Creates"
router.post('/', async (req, res) => {
    console.log(req.body)
    // res.send(req.body)
    //--------------------------------------
    req.body.aviability === 'on' ? req.body.aviability = true : req.body.aviability = false
    req.body.addToMenu === 'on' ? req.body.addToMenu = true : req.body.addToMenu = false
    try {
        const createdProduct = await Seafoods.create(req.body)
        // res.send(newFruit)
        console.log(createdProduct)
        res.redirect('/seafoodstore')
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

// Put route for handleling postmenu
// router.put('/updatePosts', async (req, res) => {
//     try {
//       const productsToUpdate = req.body.products;
//       console.log(`From put method ${productsToUpdate}`)
//       for (const product of productsToUpdate) {
//         const productId = product._id;
//         const isPosted = product.addToMenu === 'on';
//         await Seafoods.findByIdAndUpdate(productId, { addToMenu: isPosted });
//       }
//       res.redirect('/seafoodstore');
//     } catch (err) {
//       console.log(err);
//       res.status(500).send(err);
//     }
//   });

//For the edit route
router.put('/:id', async (req, res) => {
    try{
        req.body.aviability === 'on' ? req.body.aviability = true : req.body.aviability = false
        req.body.addToMenu === 'on' ? req.body.addToMenu = true : req.body.addToMenu = false
        const updatedProduct = await Seafoods.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.redirect('/seafoodstore/' + updatedProduct._id)
    } catch (err) {
        console.log("ERROR IN EDIT: ", err)
        res.status(500).send(err)
    }
})

//DELETE ROUTE
router.delete('/:id', async (req, res) => {
    try{
        const product = await Seafoods.findByIdAndDelete(req.params.id, {new: true})
        console.log(`Deleted product: ${product}`)
        res.redirect('/seafoodstore')
    } catch (err){
        console.log("ERROR ON DELETE REQUEST: ", err)
        res.status(500).send(err)
    }
})

module.exports = router