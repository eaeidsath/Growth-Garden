import { styled } from "styled-components";

export const Message = styled.span`
  padding-left: 10%;
  font-size: 2.5rem;
  position: absolute;
  margin-top: -6.25rem;
  @media (max-width: 1000px) {
    display: none;
  }
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
