const express = require('express');
const { registerUser, loginUser, verifyOtpHandler,  forgotPassword, resetPassword} = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/verify-otp', verifyOtpHandler)
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

module.exports = router;
