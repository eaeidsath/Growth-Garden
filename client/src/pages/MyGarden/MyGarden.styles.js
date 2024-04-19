import { styled } from "styled-components";

export const LargeContainer = styled.div`
  margin-top: 40px;
  margin-left: 10px;
  margin-right: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  /* Responsive layout */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const GardenBox = styled.div`
  background-image: url("/wood.jpg");
  background-size: cover;
  background-position: center;
  color: white;
  font-family: var(--annie-use-your-telescope);
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
`;

export const GoalCard = styled.div`
  font-size: 2rem;
  font-family: var(--quicksand);
  border: 10px solid var(--dark-moss-green);
  padding: 10px;
  background-color: var(--beaver);
`;

export const GoalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   margin-bottom: 20px;
  margin-left: 50px;
  margin-right: 50px;
`;

export const Alert = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
font-family: var(--quicksand);
padding: 20px;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
z-index: 999;
`;
