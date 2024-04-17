// components/WorkoutForm.js
import { useState } from "react";

const WorkoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    exercises: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to backend API
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Workout details inputs */}
      <button type="submit">Save Workout</button>
    </form>
  );
};

export default WorkoutForm;
