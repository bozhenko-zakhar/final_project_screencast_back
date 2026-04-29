import { Router } from "express";
import { celebrate } from "celebrate";

import { authenticate } from "../middleware/authenticate.js";
import { getWeekSchema } from "../validations/weeksValidation.js";
import { getWeekInfo } from "../controllers/weeks/weeksController.js";
import { getBabyStateByWeek } from "../controllers/weeks/getBabyStateByWeek.js";

import { getPublicWeekInfo } from "../controllers/weeks/getPublicWeekInfo.js";
import { getPrivateWeekInfo } from "../controllers/weeks/getPrivateWeekInfo.js";
import { getBabyDevelopment } from "../controllers/weeks/getBabyDevelopment.js";
import { getMomBodyInfo } from "../controllers/weeks/getMomBodyInfo.js";

const weeksRoute = Router();

weeksRoute.get("/public/info", getPublicWeekInfo);
weeksRoute.get("/private/info", authenticate, getPrivateWeekInfo);
weeksRoute.get("/baby/:week", authenticate, getBabyDevelopment);
weeksRoute.get("/mom/:week", authenticate, getMomBodyInfo);
weeksRoute.get("/mom-state", authenticate, getMomBodyInfo);

weeksRoute.get("/", celebrate(getWeekSchema), getWeekInfo);
weeksRoute.get("/:weekNumber", authenticate, getBabyStateByWeek);

export default weeksRoute;