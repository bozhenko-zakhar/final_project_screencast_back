import { Router } from "express";
import { celebrate } from "celebrate";
import { getWeekSchema } from "../validations/weeksValidation.js";
import { getWeekInfo } from "../controllers/weeks/weeksController.js";

const weeksRoute = Router();

weeksRoute.get("/", celebrate(getWeekSchema), getWeekInfo);

export default weeksRoute;