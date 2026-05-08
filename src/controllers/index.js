import { loginUser } from './auth/loginUser.js';
import { logoutUser } from './auth/logoutUser.js';
import { refreshUserSession } from './auth/refreshUserSession.js';
import { registerUser } from './auth/registerUser.js';

import { createDiary } from './diaries/createDiary.js';
import { deleteDiary } from './diaries/deleteDiary.js';
import { getDiary, getDiaryById } from './diaries/getDiary.js';
import { updateDiary } from './diaries/updateDiary.js';

import { changeTask } from './tasks/changeTask.js';
import { createTask } from './tasks/createTask.js';
import { getTasks } from './tasks/getTask.js';

import { getUser } from './users/getUser.js';
import { updateUser } from './users/updateUser.js';
import { updateUserAvatar } from './users/updateUserAvatar.js';

import { getPublicWeekInfo } from './weeks/getPublicWeekInfo.js';
import { getPrivateWeekInfo } from './weeks/getPrivateWeekInfo.js';
import { getBabyStateInfo } from './weeks/getBabyStateInfo.js';
import { getMomStateInfo } from './weeks/getMomStateInfo.js';

export const auth = {
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
};

export const diaries = {
  createDiary,
  deleteDiary,
  getDiary,
  getDiaryById,
  updateDiary,
};

export const tasks = {
  changeTask,
  createTask,
  getTasks,
};

export const users = {
  getUser,
  updateUser,
  updateUserAvatar,
};

export const weeks = {
  getPublicWeekInfo,
  getPrivateWeekInfo,
  getBabyStateInfo,
  getMomStateInfo,
};