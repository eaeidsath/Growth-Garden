import { useState, useEffect } from "react";

import { useMutation } from "@apollo/client";
import jwt_decode from 'jwt-decode';
import { ADD_GOAL } from "../../utils/mutations";

import Auth from "../../utils/auth";

import { Link } from 'react-router-dom';


export default function CreateNewGoal({ username }) {
  const [formData, setFormData] = useState({
    category: "",
    goalTitle: "",
    frequency: "",
  });

  const handleDropdownChange = (event) => {
    setFormData({ ...formData, category: event.target.value });
  };

  const handleTextInputChange = (event) => {
    setFormData({ ...formData, goalTitle: event.target.value });
  };

  const handleRadioChange = (event) => {
    setFormData({ ...formData, frequency: event.target.value });
  };

  const [addGoal, { error }] = useMutation(ADD_GOAL);

  useEffect(() => {
    // Get the JWT token from local storage
    const token = localStorage.getItem('jwtToken');
    if (token) {
      // Decode the token to extract the username
      const decodedToken = jwt_decode(token);
      const username = decodedToken.username;
      // Use the username if needed
      console.log('Username:', username);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const data = await addGoal({
        variables: { username: getUsernameFromToken(),  category: formData.category, goalTitle: formData.goalTitle, frequency: formData.frequency },
      });
      setFormData("");
    } catch (e) {
      console.error(e);
    }
  };

  const getUsernameFromToken = () => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decodedToken = jwt_decode(token);
      return decodedToken.username;
    }
    return null;
  };

  return (
    <>
    {Auth.loggedIn() ? (
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
              checked={formData.frequency === "daily"}
              onChange={handleRadioChange}
            />
            daily
          </label>
          <label>
            <input
              type="radio"
              value="weekly"
              checked={formData.frequency === "weekly"}
              onChange={handleRadioChange}
            />
            weekly
          </label>
          <label>
            <input
              type="radio"
              value="monthly"
              checked={formData.frequency === "monthly"}
              onChange={handleRadioChange}
            />
            monthly
          </label>
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
      ) : (
        <p> You need to be logged in to make a goal. Please{' '}
        <Link to="/">login</Link> or  
        <Link to="/signup"> signup.</Link>
         </p>
      )}
    </>
  );
}
