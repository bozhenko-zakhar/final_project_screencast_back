import { BabyStateModel } from '../../models/baby_state.js';
import createHttpError from 'http-errors';

export const getWeekInfo = async (req, res, next) => {

  try {
    const data = await getWeekData();
    
    res.status(200).json({
      message: 'Success',
      data,
			daysToBirth: 280
    });
  } catch (error) {
    next(error);
  }
};
