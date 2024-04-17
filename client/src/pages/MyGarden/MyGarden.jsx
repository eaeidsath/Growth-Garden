import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CreateNewGoal from "../../components/CreateNewGoal/CreateNewGoal";
import MyGoals from "../../components/MyGoals/MyGoals";
import Flower from "../../components/Flower/Flower";
import FlowerGarden from '../../components/FlowerGarden/FlowerGarden';

import { LargeContainer, GardenBox, GoalCard } from './MyGarden.styles';

import { QUERY_USER, GET_GOALS } from '../../utils/queries';

import Auth from '../../utils/auth';

export default function MyGarden() {
  
  const { username: userParam } = Auth.getProfile().data.username;

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam },
  });

/*   const { loading, data } = useQuery(GET_GOALS, {
    variables: { username: username },
  }); */


  const user = data?.user || {};
  const goals = data?.goals || [
    {
      _id: '661df5f4952c1bc60c556172',
      flowerType: "daisy",
      goalTitle: "Start a successful blog within the next 2 years",
      activityLevel: 5
  
    },
    {
      _id: '661df5f4952c1bc60c556122',
      flowerType: "rose",
      goalTitle: "Run a half-marathon in 2026",
      activityLevel: 5
 
    },
    {
      _id: '661df5f4952c1bc60c5561a2',
      flowerType: "daisy",
      goalTitle: "Volunteer abroad and make a difference in underserved communities",
      activityLevel: 0

    },
    {
      _id: '661df5f4952c1bc60c5561ba',
      flowerType: "petunia",
      goalTitle: "Organize a charity event to support a cause I'm passionate about",
      activityLevel: 1
    },
  ];


  if(loading) {
    return <div>Loading...</div>
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
    <LargeContainer>
      <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Welcome, {user.username}.
      </h2>
      <GardenBox>
        <div>
          <FlowerGarden
            goals={user.goals}
          />
        </div>
      </GardenBox>
      <GoalCard>
        <MyGoals />
      </GoalCard>
    </LargeContainer>
  );
}