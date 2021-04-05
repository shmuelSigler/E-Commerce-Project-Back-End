let Store = require("../models/Store")


exports.findAll = function (req,res) {
    Employee.findAll(function(err, products){
       console.log(products);
        if(err)
            res.send(err)
        else{
            res.send(products)
        }
    })
}