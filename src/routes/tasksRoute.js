import { Router } from "express";
import { getTasks } from "../controllers/tasks/getTask.js";

const tasksRoute = Router();

tasksRoute.get("/", getTasks);

export default tasksRoute;