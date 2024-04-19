import { GoalItem, GoalIcon, GoalText, GoalLink } from "./MyGoals.styles";

const getIcon = (category) => {
  switch (category) {
    case "fitness":
      return "🏋🏽";
    case "education":
      return "📚";
    case "finance":
      return "🏦";
    case "mindfulness":
      return "🧘🏽";
    case "career":
      return "🗄️";
    case "skills":
      return "🏆";
    case "travel":
      return "✈️";
    case "goodwill":
      return "🤗";
    case "productivity":
      return "🦸🏽";
    default:
      return "";
  }
};

export default function MyGoals({ goals }) {
  return (
    <ul>
      {goals &&
        goals.map((goal) => {
          const icon = getIcon(goal.category);

          return (
            <GoalItem key={goal._id}>
              <GoalIcon>{icon}</GoalIcon>
              <GoalLink to={`/singlegoal/${goal._id}`}>
                <GoalText>{goal.goalTitle}</GoalText>
              </GoalLink>
            </GoalItem>
          );
        })}
    </ul>
  );
}
