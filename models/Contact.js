const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  instagram: {
    type: String
  },
  facebook: {
    type: String
  },
  twitter: {
    type: String
  },
  youtube: {
    type: String
  },
  linkedin: {
    type: String
  },
  reddit: {
    type: String
  },
  guthub: {
    type: String
  },
  type: {
    type: String,
    default: 'personal'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('contact', ContactSchema);
