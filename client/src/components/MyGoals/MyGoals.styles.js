import { styled } from "styled-components";

export const GoalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const GoalItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid black;
`;

export const GoalIcon = styled.span`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const GoalText = styled.span`
  font-size: 16px;
`;