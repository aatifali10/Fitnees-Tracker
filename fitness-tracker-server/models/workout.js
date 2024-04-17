// models/Workout.js
const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  category: { type: String },
  exercises: [
    {
      name: { type: String, required: true },
      sets: { type: Number },
      reps: { type: Number },
      weight: { type: Number },
      notes: { type: String },
    },
  ],
});

module.exports = mongoose.model("Workout", workoutSchema);
