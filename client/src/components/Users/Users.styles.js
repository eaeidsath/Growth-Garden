import { styled } from "styled-components";

// Styled components for the contact card
export const CardContainer = styled.div`
background-color: var(--beaver);
border-radius: 12px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
width: 200px;
`;

export const ProfilePic = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Username = styled.h2`
  margin: 0;
  font-size: 1.2rem;
`;

export const DateJoined = styled.p`
  margin: 5px 0;
  font-size: 0.9rem;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--dark-moss-green);
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--dark-moss-green-2)};
  }
`;

