const router = require('express').Router();

const { createCategory, getCategories, getCategoryById, updateCategory, deleteCategory } = require('../controllers/Category.Controller');
const { isAuthenticated } = require('../middleware/Authenticated');


// Create a new category (no authentication needed)
router.post('/categories', isAuthenticated, createCategory);
// Get all categories (public route)
router.get('/categories', getCategories);
// Get a category by its ID (public route)
router.get('/categories/:id', getCategoryById);
// Update an existing category (authentication required)
router.put('/categories/:id', isAuthenticated, updateCategory);
// Delete a category (authentication required)
router.delete('/categories/:id', isAuthenticated, deleteCategory);

module.exports = router;
