import { useParams, useNavigate } from "react-router-dom";

import { useState } from "react";

import { GET_SINGLE_GOAL } from "../../utils/queries";
import { REMOVE_GOAL, UPDATE_GOAL } from "../../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";

import NewActivityModal from "../../components/NewActivityModal/NewActivityModal";
import UpdateGoalTitle from "../../components/UpdateGoalTitle/UpdateGoalTitle";

import Flower from "../Flower/Flower";

import {
  Wrapper,
  CardContainer,
  LeftSide,
  RightSide,
  FlowerImage,
  Watermark,
  Headline,
  Subtitle,
  ActivityCard,
  List,
  ListItem,
} from "./ActivityLog.styles";

export default function ActivityLog() {
  const { goalId } = useParams();
  const { loading, data } = useQuery(GET_SINGLE_GOAL, {
    variables: { goalId: goalId },
  });
  const navigate = useNavigate();

  //UPDATE GOAL CODE --
  //useState hook to edit a goal title
  const [editedGoalTitle, setEditedGoalTitle] = useState(" ");
  const [updateGoal] = useMutation(UPDATE_GOAL);
  const handleUpdateGoal = async () => {
    try {
      await updateGoal({
        variables: { goalId: goalId, updatedGoal: editedGoalTitle },
      });
      // Refetch the goal data to display the updated title
      // refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateGoalTitle = async (newTitle) => {
    try {
      await updateGoalTitle({
        variables: { goalId: goalId, updatedGoal: newTitle },
      });
      setIsEditing(false); // After updating, disable edit mode
    } catch (error) {
      console.error(error);
    }
  };

  const [updateGoalTitle] = useMutation(UPDATE_GOAL);
  const [isEditing, setIsEditing] = useState(false);

  const [removeGoal, { error }] = useMutation(REMOVE_GOAL);

  //define the function that will delete this goal data from the database once the delete goal button is clicked
  const handleRemoveGoal = async (event) => {
    try {
      const { data } = await removeGoal({
        variables: { goalId: goalId },
      });
      navigate("/mygarden");
    } catch (e) {
      console.error(e);
    }
  };

  const goal = data?.goal || {};

  return (
    <Wrapper>
      <CardContainer>
        <LeftSide>
          <Flower
            _id={goal._id}
            flowerType={goal.flowerType}
            goalTitle={goal.goalTitle}
            activityLevel={goal.activityLevel}
          />
        </LeftSide>
        <RightSide>
          {/* <Watermark src={`/badges/${goal.category}.png`} alt={goal.category} /> */}
          <Headline>{goal.goalTitle}</Headline>
          <ActivityCard>
            <Subtitle>Activity Log</Subtitle>
            <div>
              <button onClick={() => setIsEditing(true)}>
                Update this Goal
              </button><br />
              <button onClick={handleRemoveGoal}>Delete this Goal</button>
              <br />
              <NewActivityModal />
            </div>

            {/* Render GoalForm only when isEditing is true */}
            {isEditing && (
              <UpdateGoalTitle
                initialGoalTitle={goal.goalTitle}
                onSubmit={handleUpdateGoalTitle}
              />
            )}
          </ActivityCard>
          <List>
            {goal.activities.map((activity) => (
              <ListItem key={activity._id}> - {activity.activityText}</ListItem>
            ))}
          </List>
            <button style={{ backgroundColor: '#D32F2F' }} onClick={handleRemoveGoal}>Delete this goal</button>    
        </RightSide>
      </CardContainer>
    </Wrapper>
  );
}
