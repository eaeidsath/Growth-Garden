import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const CardContainer = styled.div`
  width: 80%;
  display: flex;
  background-color: white;

  /* Responsive layout */
  @media (max-width: 768px) {
    flex-direction: column;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  margin-bottom: 8px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10p;
  font-family: var(--quicksand);
  font-size: 1.5rem;
  line-height: 2;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--dark-moss-green);
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-family: var(--quicksand);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--dark-moss-green-2)};
  }
`;