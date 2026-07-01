require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');

// Connect to Database for serverless execution
connectDB();

module.exports = app;
