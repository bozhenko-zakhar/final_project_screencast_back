import { Router } from 'express';
import { celebrate } from 'celebrate';

import { weeks } from '../controllers/index.js';

import { authenticate } from '../middleware/authenticate.js';

const weeksRoute = Router();

weeksRoute.get('/public', weeks.getPublicWeekInfo);
weeksRoute.get('/private', authenticate, weeks.getPrivateWeekInfo);
weeksRoute.get('/baby-state', authenticate, weeks.getBabyStateInfo);
weeksRoute.get('/mom-state', authenticate, weeks.getMomStateInfo);

export default weeksRoute;
