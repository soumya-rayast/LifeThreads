const router = require('express').Router();
const { 
    createBlog, 
    getBlogs, 
    getBlogById, 
    updateBlog, 
    deleteBlog, 
    searchBlog, 
    addToFavourites, 
    removefromfavourites, 
    getFavourites 
} = require('../controllers/Blog.Controller');
const { isAuthenticated } = require('../middleware/Authenticated');

// Create a new blog
router.post('/create', isAuthenticated, createBlog);

// Get all blogs
router.get('/', getBlogs);

// Get a single blog by ID
router.get('/:id', getBlogById);

// Update a blog by ID
router.put('/:id', isAuthenticated, updateBlog);

// Delete a blog by ID
router.delete('/:id', isAuthenticated, deleteBlog);

// Search blogs by query parameters (e.g., ?query=keyword&category=tech)
router.get('/search', searchBlog);

// Add a blog to favourites
router.post('/favourites/:id', isAuthenticated, addToFavourites);

// Remove a blog from favourites
router.delete('/favourites/:id', isAuthenticated, removefromfavourites);

// Get user's favourite blogs
router.get('/favourites', isAuthenticated, getFavourites);

module.exports = router;
