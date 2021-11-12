const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Todo', TodoSchema);
