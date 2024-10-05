const dotenv = require('dotenv');

dotenv.config();

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017';
const PORT = process.env.PORT || 3000;

module.exports = { mongoUrl, PORT };
