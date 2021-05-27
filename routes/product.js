const express = require('express');
const router = express.Router();
const productHandler = require('./handler/products');

/* GET users listing. */
router.post('/', productHandler.create);
router.put('/:id', productHandler.edit);
router.get('/', productHandler.getAll);
router.get('/:id', productHandler.get);
router.delete('/:id', productHandler.destroy);

module.exports = router;
