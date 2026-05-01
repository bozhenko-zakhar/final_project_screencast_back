import createHttpError from "http-errors";
import { Task } from "../../models/task.js";

export const createTask = async (req, res, next) => {
  try {
    const userId = req.user?._id ?? req.user?.id;

    if (!userId) {
      throw createHttpError(401, "Unauthorized");
    }

    const task = await Task.create({
      ...req.body,
      userId,
    });

    res.status(201).json({
      status: 201,
      message: "Task created successfully",
      data: task,
    });
  } catch (error) {
    next(error);
  }
};