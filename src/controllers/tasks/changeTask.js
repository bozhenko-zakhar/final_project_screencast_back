import { Task } from "../../models/task.js";
import createHttpError from "http-errors";

export const changeTask = async (req, res) => {
  const { taskId } = req.params;
  const { isDone } = req.body;

  const task = await Task.findOneAndUpdate(
    { _id: taskId, userId: req.user._id },
    { isDone },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!task) {
    throw createHttpError(404, "Task not found");
  }

  res.status(200).json({ data: task });
};
