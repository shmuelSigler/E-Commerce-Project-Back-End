const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.pct1q.mongodb.net/storeDB?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});

const productsSchema = {
    src: String,
    thumbnail: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    filter: Array,
    title: String,
    description: String,
    productDescription: String,
    price: Number,
    previousPrice: Number,
    rating: String,
    special: String,
    stock: Number,
    printingTime: Number,
    sku: String,
    related: Array,
    size: String,
    note: String
}

const Product = mongoose.model('Product', productsSchema)

Product.findAll = function(result) {
    Product.find((err,foundproducts)=>{
        if(!err){
            return result(null, foundproducts)
        }
        else
            {console.log("error:", err)
            return result(err, null)
        }
    }) 
}






module.exports = Store