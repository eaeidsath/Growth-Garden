import Flower from "../Flower/Flower";

const FlowerGarden = ({ goals }) => {
  if (!goals.length) {
    return <h3>No goals have been created.</h3>;
  }

  return (
    <>
      {goals &&
        goals.map((goal) => (
          <Flower
            key={goal._id}
            _id={goal._id}
            flowerType={goal.flowerType}
            goalTitle={goal.goalTitle}
            activityLevel={goal.activityLevel}
          />
        ))}
    </>
  );
};

export default FlowerGarden;
