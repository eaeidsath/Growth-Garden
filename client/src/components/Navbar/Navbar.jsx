import { Link, useLocation } from "react-router-dom";
import { Nav, NavButton, NavLinks, NavLink } from "./Navbar.styles";

import Auth from "../../utils/auth";

function Navbar() {
  //create logout function
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const currentPage = useLocation().pathname;

  // Function to handle click event on navigation items
  const handleNavigationClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <Nav>
      <NavLinks>
        <li>
          <NavLink
            to="/dashboard"
            className={currentPage === "/dashboard" ? "active" : ""}
            onClick={() => handleNavigationClick("dashboard")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mygarden"
            className={currentPage === "/mygarden" ? "active" : ""}
            onClick={() => handleNavigationClick("mygarden")}
          >
            My Garden
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            className={currentPage === "/explore" ? "active" : ""}
            onClick={() => handleNavigationClick("explore")}
          >
            Explore
          </NavLink>
        </li>
        <div>
          {Auth.loggedIn() ? (
            <li>
              <NavButton onClick={logout}> Log Out </NavButton>
            </li>
          ) : (
            <>
              <li>
                <NavButton>
                  {" "}
                  <Link to="/">Log In</Link>{" "}
                </NavButton>
              </li>
            </>
          )}
        </div>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
