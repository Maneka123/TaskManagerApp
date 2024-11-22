/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

// App.js
import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskController from './controllers/TaskController';

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to update the view when the model is updated
  const renderTasks = (tasks) => {
    setTasks(tasks);
  };

  const taskController = new TaskController({ render: renderTasks });

  useEffect(() => {
    taskController.view.render(taskController.model.getTasks());  // Initial render
  }, [taskController.model, taskController.view]);

  return (
    <div>
      <h1>Task List</h1>
      <TaskInput onAddTask={(text) => taskController.addTask(text)} />
      <TaskList 
        tasks={tasks} 
        onRemove={(id) => taskController.removeTask(id)} 
        onToggleComplete={(id) => taskController.toggleComplete(id)} 
      />
    </div>
  );
}

export default App;

/*Why is this Scalable?

    State Management: The App component manages the state of tasks
     and uses the TaskController to update the state. This makes it
      easy to extend and add more state (e.g., filter states, user 
        authentication, etc.).
    Flexibility: As the app grows, additional features like sorting, 
    filtering, or even API integration can be added in the Controller
     without affecting the Model or View */