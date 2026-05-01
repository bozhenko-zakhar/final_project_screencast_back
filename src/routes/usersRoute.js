import { Router } from "express";
import { celebrate } from "celebrate";
import { authenticate } from "../middlewares/authenticate.js";
import { upload } from "../middlewares/multer.js";
import {
  updateUserSchema,
  updateUserGenderSchema,
} from "../validations/userValidation.js";
import { getUser } from "../controllers/user/getUser.js";
import { updateUser } from "../controllers/user/updateUser.js";
import { updateUserAvatar } from "../controllers/user/updateUserAvatar.js";
import { updateUserGender } from "../controllers/user/updateUserGender.js";
import { verifyEmail } from "../controllers/user/verifyEmail.js";

const router = Router();

router.use(authenticate);

router.get("/me", getUser);
router.patch("/me/avatar", upload.single("avatar"), updateUserAvatar);
router.patch("/me", celebrate(updateUserSchema), updateUser);
router.patch("/me/gender", celebrate(updateUserGenderSchema), updateUserGender);
// тимчасово прибрано: router.get("/verify-email/:token", verifyEmail);

export default router;
