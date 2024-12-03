import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Scheduler.css";

const Scheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [form, setForm] = useState({
    task: "",
    note: "",
  });

  const [currentTasks, setCurrentTasks] = useState([
    {
      task: "Monthly Magazine Subscription",
      due: new Date(),
      time: "1515",
    },
    {
      task: "Gym Membership",
      due: new Date(),
      time: "1730",
    },
    {
      task: "Pay Day",
      due: new Date(),
      time: "1800",
    },
  ]);

  const focusedTasks = currentTasks.filter(
    (item) => item.due.toDateString() === selectedDate.toDateString()
  );

  const displayTask = focusedTasks.map((item) => {
    return (
      <div className="c-task-container" key={item.task}>
        <div className="c-task-header">
          <h4>{item.task}</h4>
          <p>{item.due.toLocaleDateString()}</p>
          <p>{item.time}</p>
        </div>
        <button className="c-task-button">Done</button>
      </div>
    );
  });

  const createNewTask = (event) => {
    event.preventDefault();
    setCurrentTasks([
      ...currentTasks,
      {
        ...form,
        due: selectedDate,
      },
    ]);
    setForm({ task: "", note: "" });
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

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
            <form className="c-set-task">
              <input
                name="task"
                placeholder="Task"
                value={form.task}
                onChange={handleChange}
                required
              ></input>
              {/* <input
                name="due"
                placeholder="Due date"
                value={form.due}
                onChange={handleChange}
                required
              ></input> */}
              <input
                name="note"
                placeholder="Note"
                value={form.note}
                onChange={handleChange}
              ></input>
              <button onClick={createNewTask} type="submit">
                Submit
              </button>
            </form>
            {displayTask}
          </div>
        )}
      </div>
    </div>
  );
};

export default Scheduler;
