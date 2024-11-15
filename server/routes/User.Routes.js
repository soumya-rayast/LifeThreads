const { signUp, login, updateProfile, logout } = require('../controllers/User.Controller');
const { isAuthenticated } = require('../middleware/Authenticated');
const router = require('express').Router();

// Define user routes
// User Signup 
router.post('/signup', signUp);
//  User Login
router.post('/login', login);
// Update User Profile
router.put('/updateProfile', isAuthenticated, updateProfile);
// User Logout
router.get('/logout', isAuthenticated, logout);

module.exports = router;
