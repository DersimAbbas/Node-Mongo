
// creating collection with mongodb and node.js
const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name: {
            type: String, 
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 0

        },
        price: {
            type: Number,
            required: true
        },
        Image: {
            type: String,
            required: false
        }

    }
)
        
const Product = mongoose.model("Product", productSchema);
module.exports = Product;