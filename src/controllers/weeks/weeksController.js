import { getWeekData } from '../../services/weeksService.js';
import createHttpError from 'http-errors';

export const getWeekInfo = async (req, res, next) => {
  const { weekNumber, dueDate } = req.query;

  try {
    const data = await getWeekData(weekNumber, dueDate);

    if (!data) {
      throw createHttpError(404, 'Week not found');
    }

    res.status(200).json({
      message: 'Success',
      data,
    });
  } catch (error) {
    next(error);
  }
};
