import { Router } from "express";
import { auth } from "../controllers/index.js";
import { authenticate } from '../middleware/authenticate.js';
import { loginUserSchema, registerUserSchema } from "../validations/authValidation.js";

const authRoute = Router();

authRoute.post("/login",  celebrate(registerUserSchema), auth.loginUser);
authRoute.post('/logout', authenticate, auth.logoutUser);
authRoute.post('/refresh', authenticate, auth.refreshUserSession);
authRoute.post("/register", celebrate(loginUserSchema), auth.registerUser);


export default authRoute;
