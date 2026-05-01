import { Router } from "express";
import { users } from "../controllers/index.js";
import { authenticate } from "../middleware/authenticate.js";
import { updateUserDataSchema, updateUserImageSchema } from "../validations/index.js";
import { celebrate } from "celebrate";

const usersRoute = Router();

// Private endpoint for updating user data
usersRoute.put('/', authenticate, celebrate(updateUserDataSchema), users.updateUserData);

// Private endpoint for updating user avatar
usersRoute.put('/avatar', authenticate, celebrate(updateUserImageSchema), users.updateUserImage);

export default usersRoute;
