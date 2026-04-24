import { loginUser } from "./auth/loginUser.js";
import { logoutUser } from "./auth/logoutUser.js";
import { refreshUserSession } from "./auth/refreshUserSession.js";
import { registerUser } from "./auth/registerUser.js";

import { createDiary } from "./diaries/createDiary.js";
import { deleteDiary } from "./diaries/deleteDiary.js";
import { getDiary } from "./diaries/getDiary.js";
import { updateDiary } from "./diaries/updateDiary.js";

import { changeTask } from "./tasks/changeTask.js";
import { createTask } from "./tasks/createTask.js";
import { getTask } from "./tasks/getTask.js";

import { getUser } from "./users/getUser.js";
import { updateUserData } from "./users/updateUserData.js";
import { updateUserImage } from "./users/updateUserImage.js";

/* 🔥 ДОДАЄМО WEEKS */
import { getPublicWeekInfo } from "./weeks/getPublicWeekInfo.js";
import { getPrivateWeekInfo } from "./weeks/getPrivateWeekInfo.js";
import { getBabyDevelopment } from "./weeks/getBabyDevelopment.js";
import { getMomBodyInfo } from "./weeks/getMomBodyInfo.js";

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
  updateDiary,
};

export const tasks = {
  changeTask,
  createTask,
  getTask,
};

export const users = {
  getUser,
  updateUserData,
  updateUserImage,
};

/* 🔥 ДОДАЄМО WEEKS EXPORT */
export const weeks = {
  getPublicWeekInfo,
  getPrivateWeekInfo,
  getBabyDevelopment,
  getMomBodyInfo,
};