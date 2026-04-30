import { Router } from 'express';

import { auth } from '../controllers/index.js';
import { authenticate } from '../middleware/authenticate.js';
import { refreshAuthenticate } from '../middleware/refreshAuthenticate.js';

const authRoute = Router();

authRoute.post('/login', auth.loginUser);
authRoute.post('/logout', authenticate, auth.logoutUser);
authRoute.post('/refresh', refreshAuthenticate, auth.refreshUserSession);
authRoute.post('/register', auth.registerUser);

export default authRoute;
