// TaskController.js
import TaskModel from '../models/TaskModel';

class TaskController {
  constructor(view) {
    this.model = new TaskModel();
    this.view = view;
  }

  addTask(taskText) {
    const newTask = {
      id: Date.now(),  // Unique ID based on timestamp
      text: taskText,
      completed: false,
    };
    this.model.addTask(newTask);
    this.view.render(this.model.getTasks());  // Update the view
  }

  removeTask(taskId) {
    this.model.removeTask(taskId);
    this.view.render(this.model.getTasks());
  }

  toggleComplete(taskId) {
    this.model.toggleComplete(taskId);
    this.view.render(this.model.getTasks());
  }
}

export default TaskController;

/**Why is this Scalable?

    Decoupling: The Controller does not directly manipulate the 
    View. Instead, it passes data through the Model and updates 
    the View. This decoupling allows for flexibility. For example, 
    if you later need to integrate the app with a back-end service 
    for real-time updates, you can modify the Controller without touching
     the Model or View.
    Business Logic: The Controller holds the application's business logic
     (e.g., task completion toggling). As new features are added (such as
         filtering tasks by due date or integrating with external APIs), 
         the logic can be encapsulated within the Controller, keeping the
          Model and View simple. */