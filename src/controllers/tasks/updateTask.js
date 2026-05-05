import createHttpError from "http-errors";
import { Task } from "../../models/task.js";

export const updateTask = async (req, res, next) => {
  try {
    const userId = req.user?._id ?? req.user?.id;
    const { taskId } = req.params;

    if (!userId) {
      throw createHttpError(401, "Unauthorized");
    }

    const task = await Task.findOneAndUpdate(
      { _id: taskId, userId },
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!task) {
      throw createHttpError(404, "Task not found");
    }

    res.status(200).json({
      status: 200,
      message: "Task updated successfully",
      data: task,
    });
  } catch (error) {
    next(error);
  }
};
