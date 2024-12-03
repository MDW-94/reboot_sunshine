import React from "react";

import Navbar from "../Components/Navbar";

const Planner = () => {
  const createCalendar = () => {};

  return (
    <div className="c-planner-layout">
      <h1>Planner</h1>
      <p>Welcome to your Planner!</p>
      <p>Here’s what’s coming up:</p>
      <ul>
        <li>No tasks available yet!</li> {/* Placeholder for tasks */}
      </ul>
    </div>
  );
};

export default Planner;
