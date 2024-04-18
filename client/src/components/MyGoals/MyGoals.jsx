import Modal from "../Modal/Modal";
import { GoalHeader, GoalItem, GoalIcon, GoalText } from "./MyGoals.styles";
import { useState, useEffect } from "react";
import CreateNewGoal from "../CreateNewGoal/CreateNewGoal";
import { Link } from "react-router-dom";

export default function MyGoals({ goals }) {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    checkIcon(goals.category);
  }, [goals.category]);

  const checkIcon = (category) => {
    switch (category) {
      case "Fitness":
        setIcon("🏋🏽");
      case "Education":
        setIcon("📚");
      case "Finance":
        setIcon("🏦");
      case "Mindfulness":
        setIcon("🧘🏽");
      case "Career":
        setIcon("🗄️");
      case "Skill-building":
        setIcon("🏆");
      case "Travel":
        setIcon("✈️");
      case "Goodwill":
        setIcon("🤗");
      case "Productivity":
        setIcon("🦸🏽");
    }
  };

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
            <GoalItem key={goal._id}>
              <GoalIcon>{icon}</GoalIcon>
              <Link to={`/singlegoal/${goal._id}`}>
                <GoalText>{goal.goalTitle}</GoalText>
              </Link>
            </GoalItem>
          ))}
      </ul>
    </>
  );
}
