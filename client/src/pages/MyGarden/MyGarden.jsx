import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

import CreateNewGoal from "../../components/CreateNewGoal/CreateNewGoal";
import { useEffect } from "react";

import MyGoals from "../../components/MyGoals/MyGoals";
import FlowerGarden from "../../components/FlowerGarden/FlowerGarden";
import Modal from "../../components/Modal/Modal";

import {
  LargeContainer,
  GardenBox,
  Welcome,
  GoalCard,
  GoalHeader,
  Alert,
} from "./MyGarden.styles";

export default function MyGarden() {
  const { loading, data, refetch } = useQuery(QUERY_ME);

  const user = data?.me || {};

  //useEffect hook in order to update data when item is delete on singlegoal page 
  useEffect(() => {
    if (!loading) {
      refetch(); // Refetch the data when the component mounts
    }
  }, [loading, refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <Alert>
        <p>You need to be logged in to view your garden.</p>
        <p>Use the links above to sign up or log in.</p>
      </Alert>
    );
  }

  return (
    <>
      <Welcome>Welcome, {user.username}.</Welcome>
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
