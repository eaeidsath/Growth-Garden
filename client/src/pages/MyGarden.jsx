//Components needed in this file:
// Flower.jsx (for an individual flower)
// MyGoals.jsx (to display the user's goal log)
// CreateNewGoal.jsx (form which allows a user to create a new goal)

//This file will hold the logic for rendering the growth of the garden (so this will have some html)
// We should be able to map through an array to display all of the flowers in the general garden. We can use the code from the portfolio to help us with this.

// link to view individual goal page is in the Flower.jsx component
import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import FlowerGarden from '../components/FlowerGarden/FlowerGarden';
// import goal list
// import goal form

import { QUERY_USER, GET_GOALS } from '../utils/queries';

import Auth from '../utils/auth';

export default function MyGarden() {

/*   const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam },
  }); */
  const { username } = "Benita"

  const { loading, data } = useQuery(GET_GOALS, {
    variables: { username: username },
  });

  const user = data?.user || {};
  const goals = data?.goals || [
    {
      _id: '661df5f4952c1bc60c556172',
      flowerType: "daisy",
      goalTitle: "Start a successful blog within the next 2 years",
      activityLevel: 5
  
    },
    {
      _id: '661df5f4952c1bc60c556122',
      flowerType: "rose",
      goalTitle: "Run a half-marathon in 2026",
      activityLevel: 5
 
    },
    {
      _id: '661df5f4952c1bc60c5561a2',
      flowerType: "daisy",
      goalTitle: "Volunteer abroad and make a difference in underserved communities",
      activityLevel: 0

    },
    {
      _id: '661df5f4952c1bc60c5561ba',
      flowerType: "petunia",
      goalTitle: "Organize a charity event to support a cause I'm passionate about",
      activityLevel: 1
    },
  ];

  if(loading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <FlowerGarden
        goals={goals}
      />
    </div>
  );
}
