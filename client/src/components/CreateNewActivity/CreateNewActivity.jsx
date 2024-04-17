import { useState } from "react";

function NewActivityForm({ onSubmit }) {
  const [activity, setActivity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!activity.trim()) return; // Prevent submitting empty activity

    onSubmit(activity);
    setActivity(""); // Clear input after submitting
  };

  const handleChange = (event) => {
    setActivity(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Activity:
        <input
          type="text"
          value={activity}
          onChange={handleChange}
          placeholder="Enter your new activity"
        />
        <br />
      </label>
      <button type="submit">Add Activity</button>
    </form>
  );
}

export default NewActivityForm;
