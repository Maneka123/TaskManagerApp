// TaskItem.js
import React from 'react';

function TaskItem({ task, onRemove, onToggleComplete }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => onToggleComplete(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onRemove(task.id)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
