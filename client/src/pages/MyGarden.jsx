//Components needed in this file:
// Flower.jsx (for an individual flower)
// MyGoals.jsx (to display the user's goal log)
// ActivityLog.jsx (for a user to document progress towards a goal)
// CreateNewGoal.jsx (form which allows a user to create a new goal)

//This file will hold the logic for rendering the growth of the garden (so this will have some html)
// We should be able to map through an array to display all of the flowers in the general garden. We can use the code from the portfolio to help us with this.

// onClick logic will be in this page to be able to see an individual flower
import Flower from "../components/Flower";

export default function MyGarden() {
  const flowers = [
    {
      id: 1,
      name: "daisy",
      goal: "Complete five push-ups",
      img: "1",
    },
    {
      id: 2,
      name: "rose",
      goal: "Run the 5K",
      img: "2",
    },
    {
      id: 3,
      name: "daisy",
      goal: "Read a book",
      img: "1",
    },
    {
      id: 4,
      name: "petunia",
      goal: "Finish portfolio",
      img: "3",
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
          img={flower.img}
        />
      ))}
    </div>
  );
}
