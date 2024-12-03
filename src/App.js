import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage"; // Import the new component
import Dashboard from "./Pages/Dashboard"; // Example other page
import Planner from "./Pages/Planner"; // Example other page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
    </Router>
  );
};

export default App;
