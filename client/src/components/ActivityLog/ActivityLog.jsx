import { useParams, useNavigate } from "react-router-dom";

import { GET_SINGLE_GOAL } from "../../utils/queries";
import { REMOVE_GOAL } from "../../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
// import {QUERY_USER} from '../utils/queries';

import NewActivityModal from "../../components/NewActivityModal/NewActivityModal";
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
              <button onClick={handleRemoveGoal}>Delete this goal</button>
              <br />
              <NewActivityModal />
            </div>
          </ActivityCard>
          <List>
            {goal.activities.map((activity) => (
              <ListItem key={activity._id}>{activity.activityText}</ListItem>
            ))}
          </List>
        </RightSide>
      </CardContainer>
    </Wrapper>
  );
}