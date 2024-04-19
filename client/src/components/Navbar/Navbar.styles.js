import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: var(--cambridge-blue);
  padding: 1rem;
  font-family: var(--quicksand);
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

export const NavLinks = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: flex-end;
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
