import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="logo">
      Smart Planner
    </Link>
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
