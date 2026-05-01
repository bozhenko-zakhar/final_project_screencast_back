import { Router } from 'express';
import { celebrate } from 'celebrate';
import { authenticate } from '../middleware/authenticate.js';
import { upload } from '../middleware/multer.js';
import {
  updateUserSchema,
  updateUserGenderSchema,
} from '../validations/userValidation.js';
import { getUser } from '../controllers/users/getUser.js';
import { updateUser } from '../controllers/users/updateUser.js';
import { updateUserAvatar } from '../controllers/users/updateUserAvatar.js';
import { updateUserGender } from '../controllers/users/updateUserGender.js';
import { verifyEmail } from '../controllers/users/verifyEmail.js';

const router = Router();

router.use(authenticate);

router.get('/me', getUser);
router.patch('/me/avatar', upload.single('avatar'), updateUserAvatar);
router.patch('/me', celebrate(updateUserSchema), updateUser);
router.patch('/me/gender', celebrate(updateUserGenderSchema), updateUserGender);
// тимчасово прибрано: router.get("/verify-email/:token", verifyEmail);

export default router;
