import createHttpError from "http-errors";
import { Diary } from "../../models/diary.js";

export const getDiary = async (req, res, next) => {
  try {
    const owner = req.user?._id ?? req.user?.id;

    if (!owner) {
      throw createHttpError(401, "Unauthorized");
    }

    const diaries = await Diary.find({ owner })
      .populate("emotions") 
      .sort({ createdAt: -1 });

    res.status(200).json({
      status: 200,
      message: "Diaries received successfully",
      data: diaries,
    });
  } catch (error) {
    next(error);
  }
};