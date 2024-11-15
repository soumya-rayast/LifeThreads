const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
const cookieParser = require('cookie-parser');

const connectDB = require('./utils/db');
const userRoutes = require('./routes/User.Routes.js')
const blogRoutes = require('./routes/Blog.Routes.js')
const commentRoutes = require('./routes/Comment.Routes.js')
const likeRoutes = require('./routes/LikeRoutes.js')
const categoryRoutes = require('./routes/CategoryRoutes.js')
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/api/v1/user', userRoutes)
app.use('/api/v1/blog', blogRoutes)
app.use('/api/v1/comment', commentRoutes)
app.use('/api/v1/like', likeRoutes)
app.use('/api/v1/category', categoryRoutes)

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
    connectDB()
    console.log(`Life Threads Server running at port ${PORT}`);
});
