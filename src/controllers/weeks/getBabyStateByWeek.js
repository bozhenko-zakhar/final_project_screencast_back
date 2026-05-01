import createHttpError from 'http-errors';
import { BabyStateModel } from '../../models/baby_state.js';

export const getBabyStateByWeek = async (req, res, next) => {
  try {
    const { currentWeek } = getCurrentWeek(req.user);

    const babyState = await BabyStateModel.findOne({
      weekNumber: currentWeek,
    });
    if (!babyState) {
      throw createHttpError(
        404,
        `Інформацію для ${currentWeek} тижня не знайдено`,
      );
    }
    res.status(200).json({
      status: 200,
      message: `Успішно отримано дані для ${currentWeek} тижня`,
      data: babyState,
    });
  } catch (err) {
    next(err);
  }
};
