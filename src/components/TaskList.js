// TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onRemove, onToggleComplete }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onRemove={onRemove} 
          onToggleComplete={onToggleComplete} 
        />
      ))}
    </div>
  );
}

export default TaskList;
