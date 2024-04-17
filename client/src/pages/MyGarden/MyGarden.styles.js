import { styled } from "styled-components";

export const LargeContainer = styled.div`
margin-top: 40px;
margin-left: 10px;
margin-right: 10px;
display: grid;
grid-template-columns: 2fr 1fr;
gap: 10px;
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