import React from "react";
import "./HomePage.css"; // Create this CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage-container">
      <nav className="navbar">
        <a href="/" className="logo">Smart Planner</a>
        <ul className="nav-links">
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/planner">Planner</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Welcome to Smart Planner</h1>
        <p>Plan smarter, live better. Stay organized with your personalized tasks.</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="task-preview">
        <h2>Here’s what’s coming up:</h2>
        <ul>
          <li>Pay electricity bill - Due in 2 days</li>
          <li>Doctor's appointment - Tomorrow at 10 AM</li>
        </ul>
      </section>

      <footer className="footer">
        <p>Smart Planner © 2024</p>
      </footer>
    </div>
  );
};

export default HomePage;
