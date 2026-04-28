import createHttpError from "http-errors";
import { pregnancyWeeks } from "../../data/weekContent.js";
import {
  getDaysToBirth,
  normalizePregnancyWeek,
} from "../../helpers/pregnancy.js";

export const getPublicWeekInfo = (req, res, next) => {
  try {
    const pregnancyWeek = normalizePregnancyWeek(
      req.query.week ?? req.query.weekNumber
    );

    const weekInfo = pregnancyWeeks.find((item) => item.week === pregnancyWeek);

    if (!weekInfo) {
      throw createHttpError(404, "Week not found");
    }

    const daysToBirth = getDaysToBirth({
      dueDate: req.query.dueDate,
      conceptionDate: req.query.conceptionDate,
      pregnancyWeek,
    });

    res.status(200).json({
      status: 200,
      message: "Public week information received successfully",
      data: {
        pregnancyWeek,
        daysToBirth,
        baby: weekInfo.baby.dashboard,
        momAdvice: weekInfo.mom.dashboard,
      },
    });
  } catch (error) {
    next(error);
  }
};