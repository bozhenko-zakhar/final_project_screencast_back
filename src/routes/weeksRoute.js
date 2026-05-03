import { Router } from 'express';
import { celebrate } from 'celebrate';

import { weeks } from '../controllers/index.js';
import { getBabyStateByWeek } from '../controllers/weeks/getBabyStateByWeek.js';
import { getMomStateInfo } from '../controllers/weeks/getMomStateInfo.js';
import { getWeekInfo } from '../controllers/weeks/weeksController.js';

import { getWeekSchema } from '../validations/weeksValidation.js';

import { authenticate } from '../middleware/authenticate.js';

const weeksRoute = Router();

weeksRoute.get('/public', getWeekInfo);
weeksRoute.get('/private', authenticate, weeks.getWeekInfo);
weeksRoute.get('/baby-state', authenticate, getBabyStateByWeek);
weeksRoute.get('/mom-state', authenticate, weeks.getMomStateInfo);

export default weeksRoute;
