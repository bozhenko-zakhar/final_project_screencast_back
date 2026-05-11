import { Router } from "express";

import { getEmotions } from "../controllers/emotions/getEmotions.js";

const emotionsRoute = Router();

emotionsRoute.get("/", getEmotions);

export default emotionsRoute;