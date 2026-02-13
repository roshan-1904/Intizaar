const mongoose = require('mongoose');

const ContactSubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  serviceType: {
    type: String,
    enum: ['Booking', 'Consultation', 'General Inquiry'], // Added dropdown options
    default: 'General Inquiry'
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ContactSubmission', ContactSubmissionSchema);
