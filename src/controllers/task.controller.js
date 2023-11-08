const { taskService } = require("../services");

const getAllTasks = (req, res) => {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
};

const createTask = (req, res) => {
  const { id, title, description } = req.body;

  if ((!id, !title || typeof title !== "string")) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const newTask = taskService.createTask({ id, title, description });
  res.status(201).json(newTask);
};

const getTaskById = (req, res) => {
  const taskId = req.params.id;
  const task = taskService.getTaskById(taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
};

const updateTask = (req, res) => {
  const taskId = req.params.id;
  const { title, description } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({ error: "Invalid or missing title" });
  }

  const updatedTask = taskService.updateTask(taskId, { title, description });
  if (!updatedTask) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(updatedTask);
};

const deleteTask = (req, res) => {
  const taskId = req.params.id;

  if (taskService.deleteTask(taskId)) {
    res.status(200).send("Task deleted successfully");
  } else {
    res.status(404).json({ error: "Task not found" });
  }
};

module.exports = {getAllTasks, createTask, getTaskById, updateTask, deleteTask};
