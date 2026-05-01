import { Router } from "express";
import { auth } from "../controllers/index.js";
import { authenticate } from '../middleware/authenticate.js';
import { refreshAuthenticate } from '../middleware/refreshAuthenticate.js';
import { loginUserSchema, registerUserSchema } from "../validations/authValidation.js";
import { celebrate } from "celebrate";

const authRoute = Router();

authRoute.post("/login",  celebrate(loginUserSchema), auth.loginUser);
authRoute.post('/logout', authenticate, auth.logoutUser);
authRoute.post('/refresh', refreshAuthenticate, auth.refreshUserSession);
authRoute.post('/register', celebrate(registerUserSchema), auth.registerUser);

export default authRoute;
