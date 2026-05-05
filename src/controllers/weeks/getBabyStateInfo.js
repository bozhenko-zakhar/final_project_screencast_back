import createHttpError from 'http-errors';
import { BabyStateModel } from '../../models/baby_state.js';
import { getCurrentWeek } from '../../utils/getCurrentWeek.js';

export const getBabyStateInfo = async (req, res, next) => {
  try {
    const requestedWeek = Number(req.query.weekNumber);

    const { currentWeek } = getCurrentWeek(req.user);

    const weekNumber = Number.isFinite(requestedWeek)
      ? requestedWeek
      : currentWeek;

    const babyState = await BabyStateModel.findOne({
      weekNumber: weekNumber,
    });

    if (!babyState) {
      throw createHttpError(404, `Інформацію для ${weekNumber} тижня не знайдено`);
    }

    res.status(200).json({ babyState });
  } catch (err) {
    next(err);
  }
};
