import createHttpError from "http-errors";
import { Diary } from "../../models/diary.js";

export const updateDiary = async (req, res, next) => {
  try {
    const { diaryId } = req.params;
    const owner = req.user?._id ?? req.user?.id;

    if (!owner) {
      throw createHttpError(401, "Unauthorized");
    }

    const diary = await Diary.findOneAndUpdate(
      { _id: diaryId, owner },
      req.body,
      { new: true, runValidators: true }
    );

    if (!diary) {
      throw createHttpError(404, "Diary not found");
    }

    res.status(200).json({
      status: 200,
      message: "Diary updated successfully",
      data: diary,
    });
  } catch (error) {
    next(error);
  }
};