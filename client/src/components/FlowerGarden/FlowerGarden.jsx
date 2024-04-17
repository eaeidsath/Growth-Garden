import Flower from '../Flower/Flower';

const FlowerGarden = ({
    goals
}) => {
    if (!goals.length) {
        return <h3>No goals have been created.</h3>
    }


return (
    <div className="grid-container garden">
      {goals.map((goals) => (
        <div key={goals._id}>
        <Flower
          _id={goals._id}
          flowerType={goals.flowerType}
          goalTitle={goals.goalTitle}
          activityLevel={goals.activityLevel}
        />
        </div>
      ))}
    </div>
  );
}

export default FlowerGarden;