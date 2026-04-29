import createHttpError from "http-errors";
import { pregnancyWeeks } from "../../data/weekContent.js";
import { normalizePregnancyWeek } from "../../helpers/pregnancy.js";

export const getMomBodyInfo = (req, res, next) => {
  try {
    const pregnancyWeek = normalizePregnancyWeek(
      req.params.week ?? req.query.week ?? req.query.weekNumber
    );

    const weekInfo = pregnancyWeeks.find((item) => item.week === pregnancyWeek);

    if (!weekInfo) {
      throw createHttpError(404, "Mom body information not found");
    }

    res.status(200).json({
      status: 200,
      message: "Mom body information received successfully",
      data: {
        pregnancyWeek,
        momBody: weekInfo.mom.body,
      },
    });
  } catch (error) {
    next(error);
  }
};