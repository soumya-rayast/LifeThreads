const router = require('express').Router();
const { addComment, removeComment, getCommentsForBlog, countCommentsBlog } = require('../controllers/Comment.Controller');
const { isAuthenticated } = require('../middleware/Authenticated');

// Route to add a new comment to a blog post
router.post('/comments', isAuthenticated, addComment);

// Route to delete a comment by its ID
router.delete('/comments/:commentId', isAuthenticated, removeComment);

// Route to get all comments for a specific blog post
router.get('/blogs/:blogId/comments', getCommentsForBlog);

// Route to get the count of comments for a specific blog post
router.get('/blogs/:blogId/comments/count', countCommentsBlog);

module.exports = router;
