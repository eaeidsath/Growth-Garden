import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const currentPage = useLocation().pathname;

     // Function to handle click event on navigation items
  const handleNavigationClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/dashboard"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          onClick={() => handleNavigationClick('dashboard')}>Dashboard</Link>
        </li>
        <li>
          <Link to="/mygarden"
          className={currentPage === '/mygarden' ? 'nav-link active' : 'nav-link'}
          onClick={() => handleNavigationClick('mygarden')}>My Garden</Link>
        </li>
        <li>
          <Link to="/explore"
          className={currentPage === '/explore' ? 'nav-link active' : 'nav-link'}
          onClick={() => handleNavigationClick('explore')}>Explore</Link>
        </li>
        <li>
          <Link to="/logout">Log Out</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
