import { BabyStateModel } from '../../models/baby_state.js';
import createHttpError from 'http-errors';

export const getWeekInfo = async (req, res, next) => {
	try {
		const data = await BabyStateModel.findOne({ weekNumber: 1 });

    if (!data) {
      throw createHttpError(404, 'Week not found');
    }

    res.status(200).json({
      message: 'Success',
      data,
			daysToBirth: 280
    });
  } catch (error) {
    next(error);
  }
};
