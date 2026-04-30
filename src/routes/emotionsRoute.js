import { Router } from "express";
import { celebrate } from "celebrate";
import { authenticate } from "../middleware/authenticate.js";
import { getEmotions } from "../controllers/emotions/getEmotions.js";

const emotionsRoute = Router();

emotionsRoute.get("/", authenticate, getEmotions);

export default emotionsRoute;