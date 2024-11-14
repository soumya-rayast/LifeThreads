const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./utils/db');


dotenv.config();
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    connectDB()
    console.log(`Server running at port ${PORT}`);
});
