const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Create a new user
router.post('/', async (req, res) => {
  try {
    const { username } = req.body;
    const newUser = await User.create({ username });
    res.redirect(`/users/${newUser._id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Get a user's details and habits
router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).populate('habits'); // Assuming you've defined a "habits" field in your User model
    res.render('userDetail.ejs', { user });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
