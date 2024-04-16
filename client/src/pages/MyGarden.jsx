//Components needed in this file:
// Flower.jsx (for an individual flower)
// MyGoals.jsx (to display the user's goal log)
// CreateNewGoal.jsx (form which allows a user to create a new goal)

//This file will hold the logic for rendering the growth of the garden (so this will have some html)
// We should be able to map through an array to display all of the flowers in the general garden. We can use the code from the portfolio to help us with this.

// link to view individual goal page is in the Flower.jsx component
import Flower from "../components/Flower/Flower";

export default function MyGarden() {
  //this is representing the 'goals' array from a user's goals
  const flowers = [
    {
      id: 1,
      name: "daisy",
      goal: "Complete five push-ups",
      activityLevel: 0
  
    },
    {
      id: 2,
      name: "rose",
      goal: "Run the 5K",
      activityLevel: 4
 
    },
    {
      id: 3,
      name: "daisy",
      goal: "Read a book",
      activityLevel: 6

    },
    {
      id: 4,
      name: "petunia",
      goal: "Finish portfolio",
      activityLevel: 6
    },
  ];

  return (
    <div className="grid-container garden">
      {flowers.map((flower) => (
        <Flower
          key={flower.id}
          id={flower.id}
          name={flower.name}
          goal={flower.goal}
          activityLevel={flower.activityLevel}
        />
      ))}
    </div>
  );
}
