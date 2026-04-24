import { Task } from "../../models/task.js";

export const getTask = async (req, res) => {
  const tasks = await Task.find({ userId: req.user._id });

  res.status(200).json({ data: tasks });
};