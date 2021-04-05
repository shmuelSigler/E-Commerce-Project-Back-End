const express = require('express');
const router = express.Router();
const  storeController = require('../controllers/StoreController')

/* GET products listing. */
router.get('/', storeController.findAll);



module.exports = router;

