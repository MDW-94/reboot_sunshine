import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Scheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <div>
        <h2>Select a Date</h2>
        <Calendar onChange={setSelectedDate} value={selectedDate} />
        <p>Selected Date: {selectedDate.toDateString()}</p>
      </div>

      <div>
        {selectedDate && (
          <div>
            <h3> Set A Task For: {selectedDate.toDateString()}</h3>
            <div>
              <input placeholder="No."></input>
              <input placeholder="Task"></input>
              <input placeholder="Time"></input>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scheduler;
