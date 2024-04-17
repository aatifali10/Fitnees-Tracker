
const Workout = require('../models/Workout');

exports.createWorkout = async (req, res) => {
  try {
    const workout = await Workout.create(req.body);
    res.status(201).json(workout);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Implement similar controller functions for other CRUD operations
