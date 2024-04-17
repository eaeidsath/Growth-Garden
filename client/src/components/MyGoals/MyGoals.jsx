import Modal from "../Modal/Modal";
import { GoalHeader, GoalItem, GoalIcon, GoalText } from "./MyGoals.styles";

export default function MyGoals() {
  return (
    <>
      <GoalHeader>
        <h3>My Goals</h3>
        <Modal />
        {/* can I pass a parameter in here to re-use the modal? */}
      </GoalHeader>
      <ul>
        <GoalItem>
          <GoalIcon>🏋🏽</GoalIcon>
          <GoalText>Run a half-marathon in 2026</GoalText>
        </GoalItem>
        <GoalItem>
          <GoalIcon>🏆</GoalIcon>
          <GoalText>Start a successful blog within the next 2 years</GoalText>
        </GoalItem>
        <GoalItem>
          <GoalIcon>✈️</GoalIcon>
          <GoalText>Travel to Japan and immerse myself in the culture</GoalText>
        </GoalItem>
        <GoalItem>
          <GoalIcon>🤗</GoalIcon>
          <GoalText>
            Volunteer abroad and make a difference in underserved communities
          </GoalText>
        </GoalItem>
        <GoalItem>
          <GoalIcon>🤗</GoalIcon>
          <GoalText>
            Organize a charity event to support a cause I'm passionate about
          </GoalText>
        </GoalItem>
      </ul>
    </>
  );
}
