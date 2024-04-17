import { useState, useEffect } from "react";

import { useMutation } from "@apollo/client";
import jwt_decode from 'jwt-decode';
import { ADD_GOAL } from "../../utils/mutations";

import Auth from "../../utils/auth";

import { Link } from 'react-router-dom';


export default function CreateNewGoal({}) {
  const [formData, setFormData] = useState({
    category: "",
    goalTitle: "",
    frequency: "",
  });

  //create state for username so we can send this data as a request to apollo
  const [username, setUsername] = useState('');

  //define functions that will be used in react form for..
  //1. dropdown menu for goal category 
  const handleDropdownChange = (event) => {
    setFormData({ ...formData, category: event.target.value });
  };

  //2. changing text input for goalTitle 
  const handleTextInputChange = (event) => {
    setFormData({ ...formData, goalTitle: event.target.value });
  };

  //3. radio change for goal frequency 
  const handleRadioChange = (event) => {
    setFormData({ ...formData, frequency: event.target.value });
  };

  //use hook for adding a goal 
  const [addGoal, { error }] = useMutation(ADD_GOAL);

  //use useEffect hook in order to get the user's username data from JWT
  useEffect(() => {
    // Get the JWT token from local storage
    const token = localStorage.getItem('id_token');
    if (token) {
      // Decode the token to extract the username
      const decodedToken = jwt_decode(token);
      console.log('decoded token:', decodedToken);
      setUsername(decodedToken.data.username);
      // Use the username if needed
      console.log( username);
    }
    //dependency array ensures that useEffect is only ran after first initial render
  }, []);

  //On the submit, send username, category, goalTitle and frequency data to the database
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const data = await addGoal({
        variables: { username: username,  category: formData.category, goalTitle: formData.goalTitle, frequency: formData.frequency },
      });
      //reset all form data to initial values 
      setFormData({
        category: "",
        goalTitle: "", 
        frequency: "",
      });
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <>
    {Auth.loggedIn() ? (
      <form onSubmit={handleSubmit}>
        <label>
          What area would you like to improve?
          <br />
          <select value={formData.category} onChange={handleDropdownChange}>
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
            value={formData.goalTitle}
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
        //only show the form if the user is logged in. Otherwise, direct the user to the login or sign up page
        <p> You need to be logged in to make a goal. Please{' '}
        <Link to="/">login</Link> or  
        <Link to="/signup"> signup.</Link>
         </p>
      )}
    </>
  );
}
