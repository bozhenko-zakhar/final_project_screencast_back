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

diariesRoute.post(
  "/",
  authenticate,
  celebrate(createDiarySchema),
  diaries.createDiary
);

diariesRoute.get("/", authenticate, diaries.getDiary);

diariesRoute.patch(
  "/:diaryId",
  authenticate,
  celebrate(diaryIdSchema),
  celebrate(updateDiarySchema),
  diaries.updateDiary
);

diariesRoute.delete(
  "/:diaryId",
  authenticate,
  celebrate(diaryIdSchema),
  diaries.deleteDiary
);

export default diariesRoute;