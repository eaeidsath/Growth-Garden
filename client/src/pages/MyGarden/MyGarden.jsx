import { useQuery } from "@apollo/client";

import MyGoals from "../../components/MyGoals/MyGoals";
import FlowerGarden from "../../components/FlowerGarden/FlowerGarden";

import { LargeContainer, GardenBox, GoalCard } from "./MyGarden.styles";

import { QUERY_ME } from "../../utils/queries";

export default function MyGarden() {
  const { loading, data } = useQuery(QUERY_ME);

  const user = data?.me || {};

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
          />
        </GoalCard>

      </LargeContainer>
    </>
  );
}
