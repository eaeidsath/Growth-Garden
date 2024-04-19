import { useState } from "react";

function GoalForm({ initialGoalTitle, onSubmit }) {
  const [goalTitle, setGoalTitle] = useState("");

  const handleChange = (e) => {
    setGoalTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the updated goal title to the onSubmit callback
    onSubmit(goalTitle); 
    setGoalTitle(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={goalTitle}
        onChange={handleChange}
      />
      <button type="submit">Update</button>
    </form>
  );
}

export default GoalForm;
