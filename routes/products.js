const express = require('express');
const router = express.Router();
const  productController = require('../controllers/ProductController')

/* GET products listing. */
router.get('/', productController.findAll)
router.post('/',productController.addProduct)

router.get('/:id', productController.findOneProduct);
router.delete('/:id',productController.deleteProduct)
router.put('/:id',productController.editProduct)

module.exports = router;

