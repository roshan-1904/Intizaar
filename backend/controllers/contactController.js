const ContactSubmission = require('../models/ContactSubmission');

// @desc    Submit a new contact form
// @route   POST /api/contact
// @access  Public
exports.submitContactForm = async (req, res) => {
  const { name, email, message, serviceType } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  try {
    const newSubmission = new ContactSubmission({
      name,
      email,
      message,
      serviceType
    });

    const savedSubmission = await newSubmission.save();
    res.status(201).json({ message: 'Contact form submitted successfully!', submission: savedSubmission });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get all contact submissions
// @route   GET /api/contact
// @access  Private (Admin only)
exports.getContactSubmissions = async (req, res) => {
  try {
    const submissions = await ContactSubmission.find().sort({ submittedAt: -1 });
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};