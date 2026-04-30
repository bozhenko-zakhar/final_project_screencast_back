import { Router } from "express";
import { celebrate } from "celebrate";

import { weeks } from "../controllers/index.js";
import { getBabyStateByWeek } from "../controllers/weeks/getBabyStateByWeek.js";
import { getWeekSchema } from "../validations/weeksValidation.js";
import { authenticate } from "../middleware/authenticate.js";

const weeksRoute = Router();

weeksRoute.get("/public", celebrate(getWeekSchema), weeks.getWeekInfo);
weeksRoute.get("/private", authenticate, weeks.getWeekInfo);
weeksRoute.get("/mom-state", authenticate, weeks.getMomStateInfo);

weeksRoute.get("/:weekNumber", authenticate, getBabyStateByWeek);

export default weeksRoute;