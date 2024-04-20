import { styled } from 'styled-components';

export const TopBanner = styled.header`
display: flex;
justify-content: center;
align-items: center;
background-image: url('Sky_banner.png');
width: 100%;
height: 15rem;
background-size: cover;
background-position: center;
`;

export const Title = styled.h1`
font-family: var(--rubik-scribble);
font-size: 3.5rem;
color: black;
background-color: white;
opacity: 0.7;
border-radius: .5;
padding-left: 10;
padding-right: 10;
`;