// components/WorkoutTracker.js
import { useState } from "react";

const WorkoutTracker = () => {
  const [workout, setWorkout] = useState({
    name: "",
    category: "",
    exercises: [],
  });

  const handleAddExercise = () => {
    setWorkout((prevState) => ({
      ...prevState,
      exercises: [
        ...prevState.exercises,
        { name: "", sets: 0, reps: 0, weight: 0, notes: "" },
      ],
    }));
  };

  return (
    <div>
      {/* Form to add workout */}
      <form>
        {/* Workout details inputs */}
        <button onClick={handleAddExercise}>Add Exercise</button>
      </form>
    </div>
  );
};

export default WorkoutTracker;
