import React from "react";
import Navbar from "../Components/Navbar";
import "./PlannerPage.style.css"; // Ensure this CSS file is properly linked for styling
import Scheduler from "../Components/Scheduler";

import logo from "../images/lloyds_logo.svg";

const PlannerPage = () => {
  // Task data for the dashboard
  // const tasks = [
  //   { id: 1, description: "Pay electricity bill", due: "Due in 2 days" },
  //   { id: 2, description: "Doctor's appointment", due: "Tomorrow at 10 AM" },
  //   { id: 3, description: "Team meeting", due: "In 3 days at 9 AM" },
  // ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="hero">
        <img src={logo} width={120} alt="lbg black horse"></img>
        <div>
          <h2>Planner</h2>
          <p>Welcome to your Planner!</p>
        </div>
      </header>

      {/* Dashboard Section */}
      <section className="dashboard1">
        {/* <h2>Calendar</h2> */}

        <Scheduler />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Smart Planner © 2024</p>
      </footer>
    </div>
  );
};

export default PlannerPage;
