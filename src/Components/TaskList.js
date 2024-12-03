// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks }) => {
  // Check if tasks are available and map over them
  if (!tasks || tasks.length === 0) {
    return <div>No upcoming tasks.</div>;
  }

  return (
    <div>
      <h3>Upcoming Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} - Due {task.dueDate}
            {task.time && ` at ${task.time}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
