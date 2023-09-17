// updateController.js
const express = require('express');
const router = express.Router();
const Seafoods = require('../models/seafood.js');

// New Update posts route
router.put('/updatePosts', async (req, res) => {
  try {
    const productsToUpdate = req.body.products;
    for (const product of productsToUpdate) {
      const productId = product._id;
      const isPosted = product.post === 'on';
      await Seafoods.findByIdAndUpdate(productId, { post: isPosted });
    }
    res.redirect('/seafoodstore');
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
