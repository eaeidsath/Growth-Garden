import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import {
  Nav,
  NavButton,
  MenuItem,
  HamburgerIcon,
  Menu,
  NavLink,
  NavWrapper,
  Welcome,
  CloseButton,
} from "./Navbar.styles";

import Auth from "../../utils/auth";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const currentPage = useLocation().pathname;

  // Function to handle click event on navigation items
  const handleNavigationClick = (section) => {
    setCurrentSection(section);
  };

  //create logout function
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  // Toggle menu function for hamburger icon
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu function
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <NavWrapper>
        <HamburgerIcon onClick={toggleMenu}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
              fill="white"
            />
          </svg>
        </HamburgerIcon>
        <Welcome>Hello there</Welcome>
        <Menu isOpen={isOpen}>
          <CloseButton onClick={closeMenu}>x</CloseButton>
          <MenuItem>
            <NavLink
              to="/dashboard"
              className={currentPage === "/dashboard" ? "active" : ""}
              onClick={() => handleNavigationClick("dashboard")}
            >
              Dashboard
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/mygarden"
              className={currentPage === "/mygarden" ? "active" : ""}
              onClick={() => handleNavigationClick("mygarden")}
            >
              My Garden
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/explore"
              className={currentPage === "/explore" ? "active" : ""}
              onClick={() => handleNavigationClick("explore")}
            >
              Explore
            </NavLink>
          </MenuItem>
          <div>
            {Auth.loggedIn() ? (
              <MenuItem>
                <NavButton onClick={logout}> Log Out </NavButton>
              </MenuItem>
            ) : (
              <>
                <MenuItem>
                  <NavButton>
                    {" "}
                    <Link to="/">Log In</Link>{" "}
                  </NavButton>
                </MenuItem>
              </>
            )}
          </div>
        </Menu>
      </NavWrapper>
    </Nav>
  );
}

export default Navbar;
