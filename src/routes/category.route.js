const express = require('express');
const categoryController = require('../controllers/category.controller');

const router = express.Router();

router
	.route('/')
	.post(categoryController.createCategory)
	.get(categoryController.listCategory);

router.route('/:categoryId/sub').post(categoryController.createSecondCategory);

router.route('/:categoryId').put(categoryController.updateCategory);

router
	.route('/:categoryId/further')
	.post(categoryController.createThirdCategory);

module.exports = router;
