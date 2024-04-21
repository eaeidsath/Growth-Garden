import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: var(--cambridge-blue);
  font-family: var(--quicksand);
  height: 7vh;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const Welcome = styled.span`
  text-align: center;
  align-items: center;
  display: flex;
  padding-left: 15%;
  font-size: 2.5rem;
`;

export const NavButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: var(--green);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: flex-end;
  @media (max-width: 1000px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    position: absolute;
    top: 15rem;
    left: 0;
    gap: 0px;
    width: 100%;
    background-color: var(--cambridge-blue);
  }
`;

export const MenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
`;

export const NavLink = styled(Link)`
text-decoration: none;
color: #000000;
font-size: larger;
font-family: var(--quicksand)
padding: 1rem;

&.active {
    font-weight: bold;
    color: var(--green);
}
&:hover {
    text-decoration: underline;
}
`;
