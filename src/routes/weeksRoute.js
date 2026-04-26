import { Router } from "express";
// import { getWeekInfo } from "../controllers/weeks/getWeekInfo.js";
import { weeks } from "../controllers/index.js";
import { getMomStateInfo } from "../controllers/weeks/getMomStateInfo.js";
import { authenticate } from "../middleware/authenticate.js";

const weeksRoute = Router();

weeksRoute.get('/private', authenticate, weeks.getWeekInfo);
weeksRoute.get('/mom-state', authenticate, weeks.getMomStateInfo);

export default weeksRoute;