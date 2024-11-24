const express = require('express');
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const connectDB = require('./utils/db.js');
const userRoutes = require('./routes/User.Routes.js');
const blogRoutes = require('./routes/Blog.Routes.js');
const commentRoutes = require('./routes/Comment.Routes.js');
const likeRoutes = require('./routes/LikeRoutes.js');
const categoryRoutes = require('./routes/CategoryRoutes.js');

dotenv.config(); // Ensure it's only called once

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS configuration
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blog', blogRoutes);
app.use('/api/v1/comment', commentRoutes);
app.use('/api/v1/like', likeRoutes);
app.use('/api/v1/category', categoryRoutes);

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ success: false, message: err.message || 'Something went wrong!' });
});

// Handle uncaught exceptions and unhandled promise rejections
process.on('uncaughtException', (err) => {
    console.error(`Uncaught Exception: ${err.message}`);
    process.exit(1); // Shut down the server
});

process.on('unhandledRejection', (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    process.exit(1); // Shut down the server
});

// Connect to DB and start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    await connectDB();
    console.log(`Life Threads Server running at port ${PORT}`);
});
