import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const GoalItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10p;
`;

export const GoalIcon = styled.span`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const GoalText = styled.span`
  font-size: 16px;
`;

export const GoalLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover,
  &:focus {
    text-decoration: none;
    color: var(--powder-blue);
  }
  &:active{
    text-decoration: none;
    color: black;
  }
`;
