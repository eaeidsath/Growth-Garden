import ActivityLog from "../components/ActivityLog";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_SINGLE_GOAL } from "../utils/queries";

export function SingleGoal() {
  const { goalId } = useParams();

  const { loading, data } = useQuery(GET_SINGLE_GOAL, {
    variables: { goalId: goalId },
  });

  const goal = data?.goal || {};
  console.log(goal);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1> Your Goal: {goal.goalTitle} </h1>

      <ActivityLog />
    </>
  );
}

export default SingleGoal;
