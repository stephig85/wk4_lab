var mongoose = require('mongoose');

var schema = new mongoose.Schema ({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  slack_handle: String
});

var Student = mongoose.model('Student', schema);

module.exports = Student;
