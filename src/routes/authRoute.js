import { Router } from "express";
import { auth } from "../controllers/index.js";
import { celebrate } from "celebrate";
import { loginUserSchema, registerUserSchema } from "../validations/authValidation.js";

const authRoute = Router();

authRoute.post("/login",  celebrate(registerUserSchema), auth.loginUser);
authRoute.post("/logout", auth.logoutUser);
authRoute.post("/refresh", auth.refreshUserSession);
authRoute.post("/register", celebrate(loginUserSchema), auth.registerUser);


export default authRoute;