const express = require('express');
const passport = require('passport');
const { login, register, validateLogin, validateRegister } = require('../controllers/authController');

const router = express.Router();

// Login route with validation
router.post('/login', validateLogin, login);

// Register route with validation
router.post('/register', validateRegister, register);

// Google OAuth routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Redirect to home or dashboard after successful login
    res.redirect('/');
  }
);

module.exports = router;