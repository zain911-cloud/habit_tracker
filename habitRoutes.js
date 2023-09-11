// routes/habitRoutes.js
const express = require('express');
const router = express.Router();
const Habit = require('../models/habit');

// Create a new habit
router.post('/', async (req, res) => {
  try {
    const { name, userId } = req.body;
    const newHabit = await Habit.create({ name, user: userId });
    res.redirect(`/habits/${newHabit._id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
