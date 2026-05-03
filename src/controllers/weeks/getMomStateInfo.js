import { MomStateModel } from '../../models/mom_state.js';
import { getWeekInfo } from './getWeekInfo.js';
import { getCurrentWeek } from '../../utils/getCurrentWeek.js';

export const getMomStateInfo = async (req, res) => {
  const requestedWeek = Number(req.query.weekNumber);

  const { currentWeek } = getCurrentWeek(req.user);

  const weekNumber = Number.isFinite(requestedWeek)
    ? requestedWeek
    : currentWeek;

  const momState = await MomStateModel.findOne({
    weekNumber,
  });

  if (!momState) {
    throw createHttpError(404, 'Mom state not found');
  }

  res.status(200).json({ data: momState, weekNumber });
};
