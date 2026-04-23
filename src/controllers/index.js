import { loginUser } from "./auth/loginUser";
import { logoutUser } from "./auth/logoutUser";
import { refreshUserSession } from "./auth/refreshUserSession";
import { registerUser } from "./auth/registerUser";

import { createDiary } from "./diaries/createDiary";
import { deleteDiary } from "./diaries/deleteDiary";
import { getDiary } from "./diaries/getDiary";
import { updateDiary } from "./diaries/updateDiary";

import { changeTask } from "./tasks/changeTask";
import { createTask } from "./tasks/createTask";
import { getTask } from "./tasks/getTask";

import { getUser } from "./users/getUser";
import { updateUserData } from "./users/updateUserData";
import { updateUserImage } from "./users/updateUserImage";

export const auth = {
	loginUser,
	logoutUser,
	refreshUserSession,
	registerUser
};

export const diaries = {
	createDiary,
	deleteDiary,
	getDiary,
	updateDiary
};

export const tasks = {
	changeTask,
	createTask,
	getTask
};

export const users = {
	getUser,
	updateUserData,
	updateUserImage
};