import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

import CreateNewGoal from "../../components/CreateNewGoal/CreateNewGoal";
import MyGoals from "../../components/MyGoals/MyGoals";
import FlowerGarden from "../../components/FlowerGarden/FlowerGarden";
import Modal from "../../components/Modal/Modal";

import {
  LargeContainer,
  GardenBox,
  GoalCard,
  GoalHeader,
  Alert,
} from "./MyGarden.styles";

export default function MyGarden() {
  const { loading, data } = useQuery(QUERY_ME);

  const user = data?.me || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <Alert>
        You need to be logged in to view your garden. <br /><br />
        Use the links above to sign up or log in.
      </Alert>
    );
  }

  return (
    <>
      <h2>Welcome, {user.username}.</h2>
      <LargeContainer>
        <GardenBox>
          <FlowerGarden goals={user.goals} />
        </GardenBox>

        <GoalCard>
          <GoalHeader>
            <h3>My Goals</h3>
            <Modal
              buttonLabel="+ New Goal"
              modalTitle="Add New Goal"
              component={CreateNewGoal}
            />
          </GoalHeader>
          <MyGoals goals={user.goals} />
        </GoalCard>
      </LargeContainer>
    </>
  );
}
