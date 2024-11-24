const router = require('express').Router();

const { addLike, removeLike, getLikesForBlog, countLikesBlog } = require('../controllers/Like.Controller');
const { isAuthenticated } = require('../middleware/Authenticated');

// Route to add a like to a blog post
router.post('/likes/:blogId', isAuthenticated, addLike);

// Route to remove a like from a blog post
router.delete('/likes/:blogId', isAuthenticated, removeLike);

// Route to get all users who liked a specific blog post
router.get('/blogs/:blogId/likes', getLikesForBlog);

// Route to get the total count of likes for a specific blog post
router.get('/blogs/:blogId/likes/count', countLikesBlog);

module.exports = router;
