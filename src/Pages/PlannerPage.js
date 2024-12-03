import React from "react";
import "./PlannerPage.style.css"; // Ensure this CSS file is properly linked for styling

const PlannerPage = () => {
  // Task data for the dashboard
  const tasks = [
    { id: 1, description: "Pay electricity bill", due: "Due in 2 days" },
    { id: 2, description: "Doctor's appointment", due: "Tomorrow at 10 AM" },
    { id: 3, description: "Team meeting", due: "In 3 days at 9 AM" },
  ];

  return (
    <div className="c-planner-layout">
      {/* Navbar */}
      <nav className="navbar">
        <a href="/" className="logo">
          Smart Planner
        </a>
        <ul className="nav-links">
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/planner">Planner</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Planner</h1>
        <p>Welcome to your Planner!</p>
      </header>

      {/* Dashboard Section */}
      <section className="dashboard">
        <h2>Your Dashboard</h2>

        {/* Task List */}
        <div className="task-list">
          <h3>Upcoming Tasks</h3>
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <div className="task-description">{task.description}</div>
                <div className="task-due">{task.due}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats or additional info can go here */}
        <div className="additional-info">
          <h3>Stats</h3>
          <p>Total tasks: {tasks.length}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Smart Planner © 2024</p>
      </footer>
    </div>
  );
};

export default PlannerPage;
