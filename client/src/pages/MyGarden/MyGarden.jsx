import CreateNewGoal from "../../components/CreateNewGoal/CreateNewGoal";
// import { ActivityLog } from "../components/ActivityLog";
import MyGoals from "../../components/MyGoals/MyGoals";
import Flower from "../../components/Flower/Flower";

import { LargeContainer, GardenBox, GoalCard } from './MyGarden.styles';

export default function MyGarden() {
  //this is representing the 'goals' array from a user's goals
  const flowers = [
    {
      id: 1,
      name: "daisy",
      goal: "Mindfulness",
      activityLevel: 0,
    },
    {
      id: 2,
      name: "rose",
      goal: "Finance",
      activityLevel: 4,
    },
    {
      id: 3,
      name: "daisy",
      goal: "Fitness",
      activityLevel: 6,
    },
    {
      id: 4,
      name: "petunia",
      goal: "Skill-building",
      activityLevel: 6,
    },
  ];

  return (
    <LargeContainer>
      <GardenBox>
        {flowers.map((flower) => (
          <Flower
            key={flower.id}
            id={flower.id}
            name={flower.name}
            goal={flower.goal}
            activityLevel={flower.activityLevel}
          />
        ))}
      </GardenBox>
      <GoalCard>
        <MyGoals />
      </GoalCard>
    </LargeContainer>
  );
}