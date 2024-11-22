// TaskInput.js
import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task);  // Add task via controller
      setTask('');  // Reset input
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter new task" 
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;

/**Why is this Scalable?

    Component-Based Architecture: React's component-based architecture 
    makes it easy to manage UI elements. Each component has its own 
    responsibility, and you can scale by adding more components (like
         filters, sorting options, etc.) without breaking the app.
    Reusability: Each component (like TaskItem and TaskList) is reusable
     and modular. For example, the TaskList component can be reused for
      other parts of the app, and you can add different views (e.g., 
        completed tasks) without modifying the core components. */