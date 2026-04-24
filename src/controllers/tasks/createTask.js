import createHttpError from "http-errors";
import { TaskModel } from "../../models/task.js";

export const createTask = async (req, res, next) => {
  try {
    const owner = req.user?._id ?? req.user?.id;

    if (!owner) {
      throw createHttpError(401, "Unauthorized");
    }

    const task = await TaskModel.create({
      ...req.body,
      owner,
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