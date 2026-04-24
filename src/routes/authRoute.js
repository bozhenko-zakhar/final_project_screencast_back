import { Router } from "express";
import { auth } from "../controllers/index.js";

const authRoute = Router();

authRoute.post("/login", auth.loginUser);
authRoute.post("/logout", auth.logoutUser);
authRoute.post("/refresh", auth.refreshUserSession);
authRoute.post("/register", auth.registerUser);


export default authRoute;