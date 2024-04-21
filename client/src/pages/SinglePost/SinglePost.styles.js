import { styled } from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  margin: 20px;
  padding: 10px;
  text-align: center;
  justify-content: center;
  @media (max-width: 1000px) {
    margin-top: 12vh;
    margin-bottom: 5vh;
    flex-direction: column;
    align-items: center;
  }
`;

export const MessageBoard = styled.div`
  width: calc(80% - 20px); /* Set width to 80% of the container minus margin */
  background-image: url("/chalkboard.jpeg");
  background-size: cover;
  background-position: center;
  font-family: var(--annie-use-your-telescope);
  color: white;
  padding: 10px;
  text-align: center;
  border: 1rem solid #643D14;
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

export const Post = styled.div`
  padding: 30px;
  border-bottom: 2px dashed white;
`