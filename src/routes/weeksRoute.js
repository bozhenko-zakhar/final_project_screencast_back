import { Router } from 'express';
import { authenticate } from '../middleware/authenticate.js';
import { getBabyStateByWeek } from '../controllers/weeks/getBabyStateByWeek.js';

const weeksRoute = Router();

weeksRoute.get('/:weekNumber', authenticate, getBabyStateByWeek);

export default weeksRoute;
