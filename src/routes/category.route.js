const express = require('express');
const categoryController = require('../controllers/category.controller');

const router = express.Router();

router
	.route('/')
	.post(categoryController.createCategory)
	.get(categoryController.listCategory);

router.route('/:categoryId').post(categoryController.createSecondCategory);

module.exports = router;
