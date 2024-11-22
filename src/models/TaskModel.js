// TaskModel.js
class TaskModel {
    constructor() {
      this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }
  
    addTask(task) {
      this.tasks.push(task);
      this.saveTasks();
    }
  
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      this.saveTasks();
    }
  
    toggleComplete(taskId) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
        this.saveTasks();
      }
    }
  
    getTasks() {
      return this.tasks;
    }
  
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
  
  export default TaskModel;

  /*Explanation:

    The TaskModel stores tasks in localStorage and manages task CRUD operations.
    The addTask(), removeTask(), and toggleComplete() methods allow task manipulation.
    The getTasks() method retrieves the list of tasks.
    The saveTasks() method persists tasks to localStorage.
    
    */

    /*The Model handles the core logic of data management, 
    like storing and updating tasks. It interacts directly 
    with localStorage to persist the tasks, and can easily 
    be extended to connect with a backend API (e.g., using 
        REST API or GraphQL) as the app scales. */

        /*Why is this Scalable?

    Persistence: The Model is responsible for persisting data. 
    Right now, it uses localStorage to store tasks, but if we need 
    to scale, we can easily replace this with a more robust solution
     (e.g., backend storage or a database).
    Separation of Concerns: The Model is decoupled from the View
     and Controller, so if we later decide to change how tasks are
      stored or retrieved (e.g., from local storage to a database), 
      the View and Controller don't need to change. */