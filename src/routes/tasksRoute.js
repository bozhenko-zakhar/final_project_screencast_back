import { Router } from "express";
import { getTasks } from "../controllers/tasks/getTask.js";
import { authenticate } from "../middlewares/authenticate.js";

const tasksRoute = Router();

tasksRoute.get("/", authenticate, getTasks);

export default tasksRoute;