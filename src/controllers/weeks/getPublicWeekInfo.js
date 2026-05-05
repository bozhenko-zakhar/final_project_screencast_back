import { BabyStateModel } from "../../models/baby_state";
import createHttpError from "http-errors";

export const getPublicWeekInfo = async (req, res, next) => {
	const numberWeek = 1; 
	const daysToBirth = 280;

  try {
		const babyState = await BabyStateModel.findOne({ weekNumber: numberWeek })
	
		if (!babyState) {
			throw createHttpError(404, 'Baby state or Mom state not found');
		};
    
    res.status(200).json({ daysToBirth, data: babyState });
  } catch (error) {
    next(error);
  }
};
