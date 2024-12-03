import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-links">
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/planner">Planner</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
