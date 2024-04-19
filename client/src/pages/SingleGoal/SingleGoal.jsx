import ActivityLog from '../../components/ActivityLog';

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_SINGLE_GOAL } from "../../utils/queries";

export function SingleGoal() {
  //get the goalId using the useParams hook
  const { goalId } = useParams();

  // use the useQuery hook in order to get data for a single goal
  const { loading, data } = useQuery(GET_SINGLE_GOAL, {
    variables: { goalId: goalId },
  });

  const goal = data?.goal || {};
  console.log(goal);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <ActivityLog />;
}

export default SingleGoal;