const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/habit_tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a Mongoose schema and model (You should create your own schema)
const habitSchema = new mongoose.Schema({
  name: String,
  // Add other fields as needed
});

const Habit = mongoose.model('Habit', habitSchema);

// Routes
app.get('/', async (req, res) => {
  try {
    const habits = await Habit.find();
    res.render('home', { habits });
  } catch (err) {
    console.error('Error fetching habits:', err);
    res.sendStatus(500);
  }
});

app.post('/habits', async (req, res) => {
  const { name } = req.body;

  try {
    await Habit.create({ name });
    res.redirect('/');
  } catch (err) {
    console.error('Error creating habit:', err);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
