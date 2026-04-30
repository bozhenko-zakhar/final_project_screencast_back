import { Router } from "express";
import { celebrate } from "celebrate";
import { authenticate } from "../middleware/authenticate.js";

import { getTasks } from "../controllers/tasks/getTask.js";
import { changeTask } from "../controllers/tasks/changeTask.js";

import { updateTaskStatusSchema } from "../validations/tasksValidation.js";

const tasksRoute = Router();

tasksRoute.get("/", authenticate, getTasks)
tasksRoute.patch(
  "/tasks/:taskId/status", // :taskId/status
  celebrate(updateTaskStatusSchema), // celebrate
  changeTask,
);

export default tasksRoute;
