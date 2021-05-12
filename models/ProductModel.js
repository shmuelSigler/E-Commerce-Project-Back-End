const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.pct1q.mongodb.net/storeDB?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});

const myId = mongoose.Types.ObjectId;
// console.log(myId.ObjectId);
const productsSchema = {
    _id:{ type: mongoose.ObjectId, default: myId },
    id: mongoose.ObjectId,
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


// /products
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


Product.addProduct =  function (newProd, result){
    // var myId = mongoose.Types.ObjectId();
    
    const newProduct = new Product(
        // _id= myId,
        // id = '',
        newProd
    )
    console.log(newProduct);
     newProduct.save(err=>{
        if(!err) {
            
            Product.updateOne(
                {_id:newProduct._id},
                {$set: {id:newProduct._id}},
                function (err){
                    if (!err) return;
                    else console.log(err);
                }
            )
            
            return result(null, newProduct)
        }
        else {
            console.log("error:", err)
            return result(err, null)
        }
    }) 
}

// Product.findById = function(id, result) {
//     console.log(id);
//     Product.findOne({id:id},
//         function(err,foundProduct){
//             if(!err) return result(null,foundProduct)
//             else return result(err, null)
//         })
// }

// /products/:id

Product.editProduct = function (id,product,result){
    console.log(id, product);
    Product.updateOne(
        {_id:id},
        {$set: product},
        function (err){
            if (!err) {
                return result(null, product)
            }
            else {
                console.log("error:", err)
                return result(err, null)
            }
        }
)
}

Product.delete = function (id, result) {
    Product.remove(
        {_id:id},
        function(err){
            if(!err) return result(null, 'success')
            else  return result(err, null)
        }
    )
};







module.exports = Product