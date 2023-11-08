const express = require("express");
const taskController = require("../controllers/task.controller");
const { auth } = require("../middleware/auth");
const router = express.Router();


router.get("/", auth, taskController.getAllTasks);
router.post("/", auth, taskController.createTask);
router.get("/:id", auth, taskController.getTaskById);
router.put("/:id", auth, taskController.updateTask);
router.delete("/:id", auth, taskController.deleteTask);

module.exports = router;
