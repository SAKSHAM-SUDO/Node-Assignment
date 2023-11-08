class TaskService {
  constructor() {
    this.tasks = [];
  }

  getAllTasks() {
    return this.tasks;
  }

  createTask(newTask) {
    this.tasks.push(newTask);
    return newTask;
  }

  getTaskById(taskId) {
    return this.tasks.find((task) => (task.id == taskId));
  }

  updateTask(taskId, updatedTask) {
    let task = this.tasks.find((task) => task.id == taskId);
    if (!task) {
      return;
    }
    task.title = updatedTask.title;
    task.description = updatedTask.description;

    return task;
  }

  deleteTask(taskId) {
    const index = this.tasks.findIndex((task) => (task.id == taskId));
    if (index == -1) {
      return false;
    }
    this.tasks.splice(index, 1);
    return true;
  }
}

module.exports = new TaskService();
