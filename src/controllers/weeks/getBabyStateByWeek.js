import createHttpError from 'http-errors';
import { BabyStateModel } from '../../models/baby_state.js';

export const getBabyStateByWeek = async (req, res, next) => {
  try {
    const { weekNumber } = req.params;
    const babyState = await BabyStateModel.findOne({
      weekNumber: Number(weekNumber),
    });
    if (!babyState) {
      throw createHttpError(
        404,
        `Інформацію для ${weekNumber} тижня не знайдено`,
      );
    }
    res.status(200).json({
      status: 200,
      message: `Успішно отримано дані для ${weekNumber} тижня`,
      data: babyState,
    });
  } catch (err) {
    next(err);
  }
};
