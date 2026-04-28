import createHttpError from "http-errors";
import { pregnancyWeeks } from "../../data/weekContent.js";
import { normalizePregnancyWeek } from "../../helpers/pregnancy.js";

export const getBabyDevelopment = (req, res, next) => {
  try {
    const pregnancyWeek = normalizePregnancyWeek(req.params.week);

    const weekInfo = pregnancyWeeks.find((item) => item.week === pregnancyWeek);

    if (!weekInfo) {
      throw createHttpError(404, "Baby development information not found");
    }

    res.status(200).json({
      status: 200,
      message: "Baby development information received successfully",
      data: {
        pregnancyWeek,
        babyDevelopment: weekInfo.baby.development,
      },
    });
  } catch (error) {
    next(error);
  }
};