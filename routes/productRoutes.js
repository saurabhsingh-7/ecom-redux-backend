const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController'); // Adjust the path accordingly
// Route to fetch all products
router.get('/products', productController.getAllProducts);

router.post('/products', productController.addProduct);
router.delete('/products/:id', productController.deleteProduct);
module.exports = router;
