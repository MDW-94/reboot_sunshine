import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Scheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <h2>Select a Date</h2>
      <Calendar onChange={setSelectedDate} value={selectedDate} />
      <p>Selected Date: {selectedDate.toDateString()}</p>
    </div>
  );
};

export default Scheduler;
