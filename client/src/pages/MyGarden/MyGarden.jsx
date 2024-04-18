import { useQuery } from "@apollo/client";

import { useEffect } from "react";

import MyGoals from "../../components/MyGoals/MyGoals";
import FlowerGarden from "../../components/FlowerGarden/FlowerGarden";

import { LargeContainer, GardenBox, GoalCard } from "./MyGarden.styles";

import { QUERY_ME } from "../../utils/queries";

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
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <>
      <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
        Welcome, {user.username}.
      </h2>
      <LargeContainer>
        
        <GardenBox>
          <FlowerGarden goals={user.goals} />
        </GardenBox>

        <GoalCard>
          <MyGoals 
            goals={user.goals}
            onGoalsUpdated={() => location.reload()} // Reload the page after goals are updated
          />
        </GoalCard>

      </LargeContainer>
    </>
  );
}
