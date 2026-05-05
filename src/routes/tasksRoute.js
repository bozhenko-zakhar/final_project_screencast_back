import { Router } from "express";
import { celebrate } from "celebrate";
import { authenticate } from "../middleware/authenticate.js";

import { getTasks } from "../controllers/tasks/getTask.js";
import { createTask } from "../controllers/tasks/createTask.js";
import { updateTask } from "../controllers/tasks/updateTask.js";
import { changeTask } from "../controllers/tasks/changeTask.js";

import {
  createTaskSchema,
  updateTaskSchema,
  updateTaskStatusSchema,
  taskIdSchema,
} from "../validations/tasksValidation.js";

const tasksRoute = Router();

tasksRoute.use(authenticate);

tasksRoute.get("/", getTasks);
tasksRoute.post("/", celebrate(createTaskSchema), createTask);

tasksRoute.patch(
  "/:taskId",
  celebrate(taskIdSchema),
  celebrate(updateTaskSchema),
  updateTask,
);

tasksRoute.patch(
  "/:taskId/status",
  celebrate(taskIdSchema),
  celebrate(updateTaskStatusSchema),
  changeTask,
);

export default tasksRoute;
