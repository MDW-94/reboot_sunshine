import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Scheduler.css";

const Scheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentTasks] = useState([
    {
      id: 0,
      taskName: "Monthly Magazine Subscription",
      due: "04/12/24",
      time: "1515",
    },
    {
      id: 1,
      taskName: "Gym Membership",
      due: "05/12/24",
      time: "1730",
    },
    {
      id: 2,
      taskName: "Pay Day",
      due: "07/12/24",
      time: "1800",
    },
  ]);

  const displayTask = currentTasks.map((task) => {
    return (
      <div className="c-task-container">
        <h4 className="c-task-header">
          {task.taskName} <br /> {task.due} <br /> {task.time}
        </h4>
        <button className="c-task-button">Done</button>
      </div>
    );
  });

  // const createNewTask = () => {
  //   return currentTasks;
  // };

  return (
    <div>
      <div className="c-calendar">
        <h2>Select a Date</h2>
        <Calendar onChange={setSelectedDate} value={selectedDate} />
        <p>Selected Date: {selectedDate.toDateString()}</p>
      </div>

      <div>
        {selectedDate && (
          <div className="c-tasks">
            <h3> Set A Task For: {selectedDate.toDateString()}</h3>
            <div className="c-set-task">
              <input placeholder="No."></input>
              <input placeholder="Task"></input>
              <input placeholder="Time"></input>
              <input placeholder="Note"></input>
            </div>
            {displayTask}
          </div>
        )}
      </div>
    </div>
  );
};

export default Scheduler;
