import { Router } from "express";
import { celebrate } from "celebrate";

import { authenticate } from "../middleware/authenticate.js";

import { getTasks } from "../controllers/tasks/getTask.js";
import { createTask } from "../controllers/tasks/createTask.js";
import { changeTask } from "../controllers/tasks/changeTask.js";

import {
  createTaskSchema,
  updateTaskStatusSchema,
} from "../validations/tasksValidation.js";

const tasksRoute = Router();

tasksRoute.get("/", authenticate, getTasks);

tasksRoute.post(
  "/",
  authenticate,
  celebrate(createTaskSchema),
  createTask
);

tasksRoute.patch(
  "/:taskId/status",
  authenticate,
  celebrate(updateTaskStatusSchema),
  changeTask
);

export default tasksRoute;