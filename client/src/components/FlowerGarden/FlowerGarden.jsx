import Flower from '../Flower/Flower';

const FlowerGarden = ({
    goals
}) => {
    if (!goals.length) {
      return <h3>No goals have been created.</h3>
    }


return (
    <div className="grid-container garden">
      {goals && goals.map((goal) => (
        <div key={goal._id}>
        <Flower
          _id={goal._id}
          flowerType={goal.flowerType}
          goalTitle={goal.goalTitle}
          activityLevel={goal.activityLevel}
        />
        </div>
      ))}
    </div>
  );
}

export default FlowerGarden;