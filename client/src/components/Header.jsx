import Navbar from "./Navbar";

export function Header() {
  return (
    <div>
      <h1>Growth Garden</h1>
      <img className="headerImage" src="poppies.jpg"></img>
      <Navbar />
    </div>
  );
}

export default Header;
