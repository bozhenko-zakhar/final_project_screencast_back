import { Task } from "../../models/task.js";

export async function getTasks(req, res) {
  try {
    const tasks = await Task.find({ owner: req.user._id }).sort({
      createdAt: -1,
    });

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

import { Task } from "../../models/task.js";

export async function getTasks(req, res) {
  try {
    const tasks = await Task.find({
      userId: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.json(tasks);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}