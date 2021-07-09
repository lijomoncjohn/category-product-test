const dbConnection = require('../config/db');

module.exports = {
	createCategory: async (req, res, next) => {
		const category = {
			name: req.body.name,
			url: `${req.hostname}/${req.body.name.replace(/\s+/g, '-').toLowerCase()}`,
			category_id: 1,
		};

		dbConnection.query(
			'INSERT INTO sub_category SET ?',
			category,
			function (err, result) {
				console.log(err);
				if (err) {
					return res.status(400).json({
						success: false,
						messge: err.message,
					});
				}

				return res.status(400).json({
					success: true,
					result: 'Category created',
				});
			}
		);
	},

	updateCategory: async (req, res, next) => {
		res.status(200).json({
			success: true,
		});
	},

	deleteCategory: async (req, res, next) => {
		res.status(200).json({
			success: true,
		});
	},

	listCategory: async (req, res, next) => {
		dbConnection.query('SELECT * FROM category', function (err, rows) {
			res.status(200).json({
				success: true,
				rows,
			});
		});
	},

	createSecondCategory: async (req, res, next) => {
		let category;

		dbConnection.query(
			`SELECT * FROM category  WHERE category_id=${req.params.categoryId}`,
			function (err, rows) {
				if (err) {
					return res.status(404).json({
						success: false,
						message: 'No category details',
					});
				}

				category = {
					name: req.body.name,
					url: `${rows[0].url}/${req.body.name.replace(/\s+/g, '-').toLowerCase()}`,
					category_id: req.params.categoryId,
				};

				console.log(category);

				dbConnection.query(
					'INSERT INTO sub_category SET ?',
					category,
					function (err, result) {
						if (err) {
							return res.status(400).json({
								success: false,
								messge: err.message,
							});
						}

						return res.status(400).json({
							success: true,
							result: 'Sub Category created',
						});
					}
				);
			}
		);
	},

	createThirdCategory: async (req, res, next) => {
		let category;

		dbConnection.query(
			`SELECT * FROM sub_category  WHERE sub_category_id=${req.params.categoryId}`,
			function (err, rows) {
				if (err) {
					return res.status(404).json({
						success: false,
						message: 'No category details',
					});
				}

				category = {
					name: req.body.name,
					url: `${rows[0].url}/${req.body.name.replace(/\s+/g, '-').toLowerCase()}`,
					sub_category_id: req.params.categoryId,
				};

				console.log(category);

				dbConnection.query(
					'INSERT INTO further_category SET ?',
					category,
					function (err, result) {
						if (err) {
							return res.status(400).json({
								success: false,
								messge: err.message,
							});
						}

						return res.status(400).json({
							success: true,
							result: 'Sub Category created',
						});
					}
				);
			}
		);
	},
};
