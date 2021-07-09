const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

dotenv.config({ path: './src/config/config.env' });

const categoryRoute = require('./src/routes/category.route');

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use('/api/category', categoryRoute);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, console.log(`Server running on port ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
	console.log(`Error ${err.message}`);

	server.close(() => process.exit(1));
});
