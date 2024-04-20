import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  padding-top: 70px
`;

export const CardContainer = styled.div`
  width: 80%;
  display: flex;
  background-color: white;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack the flex items vertically */
    align-items: center; /* Center the items on smaller screens */
    
  }
`;

export const LeftSide = styled.div`
  flex: 1;
  text-align: center;
  background-image: url("/wood.jpg");
  background-size: cover;
  background-position: center;
`;

export const RightSide = styled.div`
  flex: 2;
  position: relative;
  padding: 40px;
`;

export const FlowerImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Watermark = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.25;
`;

export const Headline = styled.h2`
  color: black;
  margin-top: 0;
`;

export const Subtitle = styled.h3`
  font-family: var(--quicksand);
  font-size: 2rem;
  opacity: 1;
`;

export const ActivityCard = styled.div`
  margin-bottom: 8px;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const List = styled.ul`
  margin-bottom: 8px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-family: var(--quicksand);
  font-size: 1.5rem;
  line-height: 2;
`;