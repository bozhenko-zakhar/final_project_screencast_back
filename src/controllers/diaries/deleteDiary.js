import createHttpError from "http-errors";
import { Diary } from "../../models/diary.js";

export const deleteDiary = async (req, res, next) => {
  try {
    const { diaryId } = req.params;
    const owner = req.user?._id ?? req.user?.id;

    if (!owner) {
      throw createHttpError(401, "Unauthorized");
    }

    const diary = await Diary.findOneAndDelete({
      _id: diaryId,
      owner,
    });

    if (!diary) {
      throw createHttpError(404, "Diary not found");
    }

    res.status(200).json({
      status: 200,
      message: "Diary deleted successfully",
      data: diary,
    });
  } catch (error) {
    next(error);
  }
};