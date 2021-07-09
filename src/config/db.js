const mysql = require('mysql');

const dbConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'category_product_db',
});

dbConnection.connect((err) => {
	if (err) {
		console.log(err);
		throw new Error();
	}

	console.log('Connected to Database');
});

module.exports = dbConnection;
