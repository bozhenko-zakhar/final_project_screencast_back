import { Router } from "express";
import { tasks } from "../controllers/index.js";
import { createTaskSchema } from "../validations/tasksValidation.js";
import { authenticate } from "../middleware/authenticate.js";

const tasksRoute = Router();

tasksRoute.post("/", authenticate, createTaskSchema, tasks.createTask);

export default tasksRoute;