const { signUp, login, updateProfile, logout, googleLogin } = require('../controllers/User.Controller');
const { isAuthenticated } = require('../middleware/Authenticated');
const router = require('express').Router();

// Define authentication routes
// User Signup 
router.post('/auth/signup', signUp);
// User Login
router.post('/auth/login', login);
// Google Login
router.post('/auth/google-login', googleLogin);

// Define user routes that require authentication
// Update User Profile
router.put('/auth/updateProfile', isAuthenticated, updateProfile);
// User Logout
router.post('/auth/logout', isAuthenticated, logout);

module.exports = router;