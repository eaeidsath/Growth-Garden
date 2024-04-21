import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--dark-moss-green);
  color: white;
  cursor: pointer;
  display: inline-flex;
  padding-left: 120px;
  padding-right: 120px;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 10px;
  margin-left: 2px;
  margin-bottom: 70px; 
  border: 2px solid white;
  border-radius: 5px;
  bottom: 0;
  right: 5px;
  position: fixed;
  @media (max-width: 1000px) {
    width: 20px;
    padding-left: 25px;
    padding-right: 25px;
    color: transparent;
    overflow: hidden;
  }
`;
