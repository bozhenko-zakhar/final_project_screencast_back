import { Router } from "express";
import { celebrate } from "celebrate";
import { authenticate } from '../middleware/authenticate.js';
import { getWeekSchema } from "../validations/weeksValidation.js";
import { getWeekInfo } from "../controllers/weeks/weeksController.js";
import { getBabyStateByWeek } from '../controllers/weeks/getBabyStateByWeek.js';

const weeksRoute = Router();

weeksRoute.get("/", celebrate(getWeekSchema), getWeekInfo);
weeksRoute.get('/:weekNumber', authenticate, getBabyStateByWeek);

export default weeksRoute;