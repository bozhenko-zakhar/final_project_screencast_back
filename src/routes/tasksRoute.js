import { Router } from "express";

import { celebrate } from "celebrate";
import { updateTaskStatusSchema } from "../validations/tasksValidation.js";
import { changeTask } from "../controllers/tasks/changeTask.js";

const tasksRoute = Router();

tasksRoute.patch(
  "/tasks/:taskId/status",
  celebrate(updateTaskStatusSchema),
  changeTask,
);

export default tasksRoute;
