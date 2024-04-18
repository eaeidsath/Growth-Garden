import Friend from "../../components/Friend/Friend";

import { LargeContainer, Title } from './Explore.styles';

export default function Explore() {
  //this is representing the 'friends' array for a user
  const friends = [
    {
      id: 1,
      username: "Benita",
      profilePic: "/avatars/avatar.png",
      goals: ["Mindfulness", "Finance", "Fitness"]
    },
    {
      id: 2,
      username: "Keri",
      profilePic: "/avatars/Black_White-01.svg",
      goals: ["Skill-building", "Education", "Goodwill"]
    },
    {
      id: 3,
      username: "Sarah",
      profilePic: "/avatars/Black_White-02.svg",
      goals: ["Career", "Travel"]
    },
    {
        id: 4,
        username: "Sarun",
        profilePic: "/avatars/Black_White-03.svg",
        goals: ["Productivity", "Career", "Mindfulness"]
    }
  ];

  return (
    <>
    <Title>Explore the Garden</Title>
    <LargeContainer>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            id={friend.id}
            username={friend.username}
            profilePic={friend.profilePic}
          />
        ))}
    </LargeContainer>
    </>
  );
}