import Navbar from "./components/Navbar";
import "./index.css";
import { Outlet, useLocation } from "react-router-dom";

export default function App() {
  const currentPage=useLocation().pathname;

  return (
    <>
      <h1 className="rubik-scribble-regular">Growth Garden</h1>
      <Navbar />
      <Outlet />
    </>
  )
}