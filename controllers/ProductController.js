let Product = require("../models/ProductModel")

// /products
exports.findAll = function (req,res) {
    Product.findAll(function(err, products){
        if(err)
            res.send(err)
        else{
            res.send(products)
        }
    })
}

exports.addProduct = function(req, res){
    // console.log(req.body);
    // const FirstName = req.body.FirstName
    // const LastName = req.body.LastName
    // const Title = req.body.Title
    
    // // const PhotoPath = req.file ? req.file.filename.split("/")[1] : ""
    // let ProductData = {
    //     FirstName: FirstName,
    //     LastName: LastName,
    //     Title: Title,
    //     // photo_path: PhotoPath
    // }
    Product.addProduct(req.body,function (err) {
       
        if (err)
            res.send(err)
        else
            res.redirect('/products')
    })
}

// products/:id
exports.findOneProduct = function(req, res){
    Product.findById(req.params.id, function(err, product){
        console.log(product);
        if(err)
            res.send(err)
        else
            res.send(product)
    })
}

exports.editProduct = function(req,res){
    console.log(req.body);
    Product.editProduct(req.params.id, req.body, function (err, product){
        if (err) return res.send(err);
        else res.send(product)
    })
}

exports.deleteProduct = function (req, res) {
    Product.delete(req.params.id, function (err, product) {
        if (err)
            res.send(err);
        else
            res.send()
    });
};

