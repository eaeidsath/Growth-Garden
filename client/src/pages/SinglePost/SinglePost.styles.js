import { styled } from "styled-components";

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
    font-family: var(--quicksand)
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;