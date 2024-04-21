import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Nav,
  NavButton,
  MenuItem,
  Menu,
  NavLink,
  NavWrapper,
} from "./Navbar.styles";

import Auth from "../../utils/auth";

function Navbar() {
  const [currentSection, setCurrentSection] = useState("dashboard"); 
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

  return (
    <Nav>      
      <NavWrapper>
        <Menu>
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
            {Auth.loggedIn() ? (
              <MenuItem>
                <NavButton onClick={logout}> Log Out </NavButton>
              </MenuItem>
            ) : (
                <MenuItem>
                  <NavButton>
                    {" "}
                    <Link to="/">Log In</Link>{" "}
                  </NavButton>
                </MenuItem>
            )}
        </Menu>
      </NavWrapper>
    </Nav>
  );
}

export default Navbar;
