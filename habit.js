// habit.js
const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  dailyStatus: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
        enum: ['Done', 'Not done', 'None'],
        default: 'None',
      },
    },
  ],
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
