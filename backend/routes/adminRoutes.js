const express = require('express');
const { loginAdmin, registerAdmin } = require('../controllers/authController');
const router = express.Router();

router.post('/login', loginAdmin);
// This route should ideally be protected or removed after initial admin creation
router.post('/register', registerAdmin);

module.exports = router;
