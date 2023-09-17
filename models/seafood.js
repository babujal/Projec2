const mongoose = require('mongoose')

const seafoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: 0,
        required: true,
    },
    aviability: {
        type: Boolean,
        default: true,
    }, 
    addToMenu: {
        type: Boolean,
        default: true,
    }
})

//Here we set the collection name to be seafood and save it in the var Seafood.
const Seafood = mongoose.model('seafood', seafoodSchema) 

module.exports = Seafood