import { styled } from "styled-components";

export const Title = styled.h2`
color: white;
`;

export const LargeContainer = styled.div`
margin-top: 40px;
margin-left: 20px;
margin-right: 10px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap: 10px;
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