import { Router } from 'express';

import { auth } from '../controllers/index.js';
import { authenticate } from '../middleware/authenticate.js';

const authRoute = Router();

authRoute.post('/login', auth.loginUser);
authRoute.post('/logout', authenticate, auth.logoutUser);
authRoute.post('/refresh', authenticate, auth.refreshUserSession);
authRoute.post('/register', auth.registerUser);

export default authRoute;
