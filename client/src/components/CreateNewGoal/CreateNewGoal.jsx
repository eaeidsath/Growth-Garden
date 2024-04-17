import { useState } from "react";

export default function CreateNewGoal() {
  const [formData, setFormData] = useState({
    categoryInput: "",
    goalTitleInput: "",
    frequencyInput: "",
  });

  const handleDropdownChange = (event) => {
    setFormData({ ...formData, categoryInput: event.target.value });
  };

  const handleTextInputChange = (event) => {
    setFormData({ ...formData, goalTitleInput: event.target.value });
  };

  const handleRadioChange = (event) => {
    setFormData({ ...formData, frequencyInput: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        What area would you like to improve?
        <br />
        <select value={formData.categoryInput} onChange={handleDropdownChange}>
          <option value="">-- Choose a category --</option>
          <option value="fitness">Fitness </option>
          <option value="finance">Finance</option>
          <option value="mindfulness">Mindfulness</option>
          <option value="career">Career</option>
          <option value="education">Education</option>
          <option value="skills">Skill-building</option>
          <option value="travel">Travel</option>
          <option value="goodwill">Goodwill</option>
          <option value="productivity">Productivity</option>
        </select>
      </label>
      <br />
      <br />

      <label>
        What is your personal goal in this area?
        <br />
        <input
          type="text"
          value={formData.goalTitleInput}
          onChange={handleTextInputChange}
        />
      </label>
      <br />
      <br />

      <label>
        How often can you contribute activities towards this goal?
        <br />
        <br />
        <label>
          <input
            type="radio"
            value="daily"
            checked={formData.frequencyInput === "daily"}
            onChange={handleRadioChange}
          />
          daily
        </label>
        <label>
          <input
            type="radio"
            value="weekly"
            checked={formData.frequencyInput === "weekly"}
            onChange={handleRadioChange}
          />
          weekly
        </label>
        <label>
          <input
            type="radio"
            value="monthly"
            checked={formData.frequencyInput === "monthly"}
            onChange={handleRadioChange}
          />
          monthly
        </label>
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};
