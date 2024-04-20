import { styled } from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

export const BoardSidebar = styled.div`
  padding-top: 0.5rem;
  text-align: center;
  width: 20%;
  background-image: url("../src/assets/chalkboard.jpeg");
  background-size: cover;
  background-position: center;
  font-family: var(--homemade-apple);
  color: white;
  font-size: 1.2rem;
  line-height: 3rem;
`;

export const MessageBoard = styled.div`
  width: calc(80% - 20px); /* Set width to 80% of the container minus margin */
  background-image: url("../src/assets/chalkboard.jpeg");
  background-size: cover;
  background-position: center;
  font-family: var(--annie-use-your-telescope);
  color: white;
  font-size: 1.5rem;
  & a {
    color: white;
    font-size: 1rem;
    font-family: var(--quicksand)
  }
`;

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
