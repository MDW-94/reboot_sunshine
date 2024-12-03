import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard"; // Example other page
import PlannerPage from "./Pages/PlannerPage"; // Example other page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/planner" element={<PlannerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
