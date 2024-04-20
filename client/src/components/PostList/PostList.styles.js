import { styled } from "styled-components";

export const MessageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
`;

export const MessageItem = styled.div`
  padding: 10px;
  text-align: center;
  vertical-align: bottom;
`;