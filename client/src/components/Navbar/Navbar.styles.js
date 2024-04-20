import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: var(--cambridge-blue);
  padding: 1rem;
  font-family: var(--quicksand);
  height: 3rem;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Welcome = styled.span`
  text-align: center;
  align-items: center;
  display: flex;
  padding-left: 25rem;
  font-size: 2.5rem;
`;

export const HamburgerIcon = styled.div`
  display: none; /* Hide by default on larger screens */
  cursor: pointer;
  @media (max-width: 768px) {
    display: block; /* Show on smaller screens */
  }
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

export const Menu = styled.ul.attrs((props) => ({
  isOpen: props.isOpen ? 1 : undefined, // Filter out the isOpen prop
}))`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: flex-end;
  ${({ isOpen }) =>
    !isOpen &&
    `
      display: none; /* Hide when isOpen is false */
    `}
  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    position: absolute;
    top: 15rem;
    left: 0;
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

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 10px;
`;