const dbConnection = require('../config/db');

module.exports = {
	createProduct: async (req, res, next) => {
		let product;

		dbConnection.query(
			`SELECT * FROM further_category  WHERE further_category_id=${req.params.categoryId}`,
			function (err, rows) {
				if (err) {
					return res.status(404).json({
						success: false,
						message: 'No category details',
					});
				}

				product = {
					name: req.body.name,
					url: `${rows[0].url}/${req.body.name.replace(/\s+/g, '-').toLowerCase()}`,
					further_category_id: req.params.categoryId,
				};

				console.log(category);

				dbConnection.query(
					'INSERT INTO products SET ?',
					product,
					function (err, result) {
						if (err) {
							return res.status(400).json({
								success: false,
								messge: err.message,
							});
						}

						return res.status(400).json({
							success: true,
							result: 'Product created',
						});
					}
				);
			}
		);
	},
};
