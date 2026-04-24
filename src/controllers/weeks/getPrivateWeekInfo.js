import createHttpError from "http-errors";
import { pregnancyWeeks } from "../../data/weekContent.js";
import {
  getDaysToBirth,
  normalizePregnancyWeek,
} from "../../helpers/pregnancy.js";

export const getPrivateWeekInfo = (req, res, next) => {
  try {
    const pregnancyWeek = normalizePregnancyWeek(
      req.query.week
    );

    const weekInfo = pregnancyWeeks.find(
      (item) => item.week === pregnancyWeek
    );

    if (!weekInfo) {
      throw createHttpError(404, "Week not found");
    }

    const daysToBirth = getDaysToBirth({
      pregnancyWeek,
    });

    res.status(200).json({
      status: 200,
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