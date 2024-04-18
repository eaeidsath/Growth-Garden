import { useParams, useNavigate } from "react-router-dom";

import { GET_SINGLE_GOAL } from "../utils/queries";
import { REMOVE_GOAL } from "../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
// import {QUERY_USER} from '../utils/queries';

import NewActivityModal from "./NewActivityModal/NewActivityModal";

export function ActivityLog() {
  const { goalId } = useParams();
  const { loading, data } = useQuery(GET_SINGLE_GOAL, {
    variables: { goalId: goalId },
  });
  const navigate = useNavigate();

  const [removeGoal, {error}] = useMutation(REMOVE_GOAL);

  //define the function that will delete this goal data from the database once the delete goal button is clicked
  const handleRemoveGoal = async (event) => {
    try{
      const {data} = await removeGoal({
        variables: {goalId: goalId}
      });
      navigate("/mygarden");
      
    }catch(e){
      console.error(e);
    }
  }

  const goal = data?.goal || {};

  return (
    <>
      <div className="activityLogMain">
        <h2> Goal: {goal.goalTitle} </h2>
        <button onClick={handleRemoveGoal}>Delete this goal</button>
        <NewActivityModal />
        <div>
          {/* TODO: add flex properties so these are displayed 'space between' */}
          <div className="flexSpaceBetween">
            <h3>Activity Log</h3>
            {/* <button className="newActivityButton"> Add New Activity </button> */}
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
