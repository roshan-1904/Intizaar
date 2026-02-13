const express = require('express');
const { submitContactForm, getContactSubmissions } = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', submitContactForm);
router.get('/', protect, getContactSubmissions); // Protected route

module.exports = router;
