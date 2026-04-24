import { Router } from "express";
import { weeks } from "../controllers/index.js";
import { authenticate } from "../middlewares/authenticate.js";

const weeksRoute = Router();

weeksRoute.get("/public", weeks.getPublicWeekInfo);
weeksRoute.get("/private", authenticate, weeks.getPrivateWeekInfo);
weeksRoute.get("/baby/:week", authenticate, weeks.getBabyDevelopment);
weeksRoute.get("/mom/:week", authenticate, weeks.getMomBodyInfo);

export default weeksRoute;