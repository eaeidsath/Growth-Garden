import { Link, useLocation } from "react-router-dom";
import { Nav, NavButton, NavLinks, NavLink } from "./Navbar.styles";

function Navbar() {
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
            className={
              currentPage === "/dashboard" ? "active" : ""
            }
            onClick={() => handleNavigationClick("dashboard")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mygarden"
            className={
              currentPage === "/mygarden" ? "active" : ""
            }
            onClick={() => handleNavigationClick("mygarden")}
          >
            My Garden
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            className={
              currentPage === "/explore" ? "active" : ""
            }
            onClick={() => handleNavigationClick("explore")}
          >
            Explore
          </NavLink>
        </li>
        <li>
          {/* <Link to="/logout">Log Out</Link> */}
          <NavButton> Log Out </NavButton>
        </li>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
