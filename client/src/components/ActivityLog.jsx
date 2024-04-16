import { useParams } from "react-router-dom";

import { GET_SINGLE_GOAL } from "../utils/queries";
import { useQuery } from "@apollo/client";
// import {QUERY_USER} from '../utils/queries';

export function ActivityLog() {
  const { goalId } = useParams();
  const { loading, data } = useQuery(GET_SINGLE_GOAL, {
    variables: { goalId: goalId },
  });

  const goal = data?.goal || {};

  return (
    <>
      <div className="activityLogMain">
        <h2> Goal: {goal.goalTitle} </h2>
        <div>
          {/* TODO: add flex properties so these are displayed 'space between' */}
          <div className="flexSpaceBetween">
            <h3>Activity Log</h3>
            <button className="newActivityButton"> Add New Activity </button>
          </div>
          <div>
            <ul>
              {goal.activities.map((activity) => (
                <li key={activity._id}>{activity.activityText}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActivityLog;
