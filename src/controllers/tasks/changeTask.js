import { Task } from "../../models/task.js";
import createHttpError from "http-errors";

export const changeTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { isDone } = req.body;

    const task = await Task.findOneAndUpdate(
      { _id: taskId, userId: req.user._id },
      { isDone },
      { new: true },
    );

    if (!task) {
      throw createHttpError(404, "Task not found");
    }

    const safeTask = {
      _id: task._id,
      name: task.name,
      date: task.date,
      isDone: task.isDone,
    };

    res.status(200).json({ data: safeTask });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
