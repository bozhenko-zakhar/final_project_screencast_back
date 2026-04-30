import { Router } from 'express';
import { celebrate } from 'celebrate';
import { authenticate } from '../middlewares/authenticate.js';

import { getTasks } from '../controllers/tasks/getTask.js';
import { changeTask } from '../controllers/tasks/changeTask.js';

import { updateTaskStatusSchema } from '../validations/tasksValidation.js';

const tasksRoute = Router();

tasksRoute.get('/', authenticate, getTasks);
tasksRoute.patch(
  '/:taskId/status',
  celebrate(updateTaskStatusSchema),
  changeTask,
  authenticate,
);

export default tasksRoute;
