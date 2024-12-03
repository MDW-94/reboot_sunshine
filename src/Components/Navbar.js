import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/planner">Planner</Link></li>
    </ul>
  </nav>
);

export default Navbar;
