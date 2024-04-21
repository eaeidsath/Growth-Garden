import { styled } from "styled-components";

// Wrapper that goes around entire Dashboard body
export const BoardContainer = styled.div`
  display: flex;
  margin: 20px;
  @media (max-width: 1000px) {
    margin-top: 12vh;
    margin-bottom: 5vh;
    flex-direction: column;
    align-items: center;
  }
`;

// Message that displays "Hello, user" on navbar
export const Welcome = styled.span`
  padding-left: 10%;
  font-size: 2.5rem;
  position: absolute;
  margin-top: -5.2rem;
  @media (max-width: 1000px) {
    display: none;
  }
`;

// Sidebar that allows the user to add their own message
export const BoardSidebar = styled.div`
  padding-top: 0.5rem;
  text-align: center;
  width: 20%;
  background-image: url("/chalkboard.jpeg");
  background-size: cover;
  background-position: center;
  font-family: var(--homemade-apple);
  color: white;
  font-size: 1.2rem;
  @media (max-width: 1000px) {
    width: 80%;
    margin-bottom: 10px;
  }
`;

// Main message board
export const MessageBoard = styled.div`
  width: calc(80% - 20px); /* Set width to 80% of the container minus margin */
  background-image: url("/chalkboard.jpeg");
  background-size: cover;
  background-position: center;
  font-family: var(--annie-use-your-telescope);
  color: white;
  font-size: 1.5rem;
  & a {
    color: white;
    font-size: 1rem;
    font-family: var(--quicksand);
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
`;
