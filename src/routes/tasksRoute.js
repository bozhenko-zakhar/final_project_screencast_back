import { Router } from "express";
import { getTask } from "../controllers/tasks/getTask.js";

const tasksRoute = Router();

tasksRoute.get("/tasks", getTask);

export default tasksRoute;