// routes/workoutRoutes.js
const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, workoutController.createWorkout);
router.get('/', authMiddleware, workoutController.getAllWorkouts);
router.get('/:id', authMiddleware, workoutController.getWorkoutById);
router.put('/:id', authMiddleware, workoutController.updateWorkout);
router.delete('/:id', authMiddleware, workoutController.deleteWorkout);

module.exports = router;
