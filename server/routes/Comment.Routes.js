const router = require('express').Router();

const { addComment, removeComment, getCommentsForBlog, countCommentsBlog } = require('../controllers/Comment.Controller');
const { isAuthenticated } = require('../middleware/Authenticated');

// Route to add a new comment to a blog post
router.post('/add', isAuthenticated, addComment);
// Route to delete a comment by its ID
router.delete('/remove/:commentId', isAuthenticated, removeComment);
// Route to get all comments for a specific blog post
router.get('/blog/:blogId', getCommentsForBlog);
// Route to get the count of comments for a specific blog post
router.get('/count/:blogId', countCommentsBlog);

module.exports = router;
