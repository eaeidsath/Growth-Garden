import styled from "styled-components";

export const SocialFooter = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--cambridge-blue);
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;

export const SocialIcons = styled.div`
  a {
    color: white;
    margin: 0 10px;
    font-size: 24px;
  }
  & a:hover {
    color: lightgray;
  }
`;

export const Copyright = styled.p`
  font-size: 18px;
`;
