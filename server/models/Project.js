const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  github: String,
  demo: String, // Optional: for live demo links
});

module.exports = mongoose.model('Project', projectSchema);
