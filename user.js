// user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  habits: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Habit',
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
