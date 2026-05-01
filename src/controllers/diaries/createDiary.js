import createHttpError from "http-errors";
import { Diary } from "../../models/diary.js";

const getCurrentDate = () => new Date().toISOString().slice(0, 10);

export const createDiary = async (req, res, next) => {
  try {
    const owner = req.user?._id ?? req.user?.id;

    if (!owner) {
      throw createHttpError(401, "Unauthorized");
    }

    const diary = await Diary.create({
      ...req.body,
      date: req.body.date ?? getCurrentDate(),
      owner,
    });

    res.status(201).json({
      status: 201,
      message: "Diary created successfully",
      data: diary,
    });
  } catch (error) {
    next(error);
  }
};