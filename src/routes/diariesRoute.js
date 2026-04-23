import { Router } from "express";
import { diaries } from "../controllers/index.js";

const diariesRoute = Router();

diariesRoute.post("/", diaries.createDiary);
diariesRoute.delete("/:diaryId", diaries.createDiary);

export default diariesRoute;