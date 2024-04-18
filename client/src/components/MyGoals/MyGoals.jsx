import Modal from "../Modal/Modal";
import { GoalHeader, GoalItem, GoalIcon, GoalText } from "./MyGoals.styles";
import { useState, useEffect } from 'react';
import CreateNewGoal from "../CreateNewGoal/CreateNewGoal";

export default function MyGoals({ goals }) {

  const [icon, setIcon] = useState('');

  useEffect(() => {
    checkIcon(goals.category)
  });

  const checkIcon = (x) => {

    if (x === 'Fitness') {
      setIcon('🏋🏽');
    } else if (x === 'Education') {
      setIcon('📚');
    }
  }

  return (
    <>
      <GoalHeader>
        <h3>My Goals</h3>
        <Modal
          buttonLabel="Add New Goal"
          modalTitle="Add New Goal"
          component={CreateNewGoal}
        />
      </GoalHeader>
      <ul>
        {goals &&
          goals.map((goal) => (
            <GoalItem>
              <GoalIcon>{icon}</GoalIcon>
              <GoalText>{goal.goalTitle}</GoalText>
            </GoalItem>
          ))}
      </ul>
    </>
  );
}
