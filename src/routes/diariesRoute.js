import { Router } from "express";
import { celebrate } from "celebrate";

import { authenticate } from "../middleware/authenticate.js";
import { diaries } from "../controllers/index.js";

import {
  createDiarySchema,
  updateDiarySchema,
  diaryIdSchema,
} from "../validations/diariesValidation.js";

const diariesRoute = Router();

diariesRoute.use(authenticate);

diariesRoute.post("/", celebrate(createDiarySchema), diaries.createDiary);

diariesRoute.get("/", diaries.getDiary);

diariesRoute.patch(
  "/:diaryId",
  celebrate(diaryIdSchema),
  celebrate(updateDiarySchema),
  diaries.updateDiary
);

diariesRoute.delete(
  "/:diaryId",
  celebrate(diaryIdSchema),
  diaries.deleteDiary
);

export default diariesRoute;