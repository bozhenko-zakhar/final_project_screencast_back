import { BabyStateModel } from "../models/baby_state.js";
import { MomStateModel } from "../models/mom_state.js";
import { getCurrentWeek } from "./getCurrentWeek.js";
import createHttpError from 'http-errors';

export const getWeekData = async (weekNumber, dueDate) => {

    const numberWeek = 1; 

    const [baby, mom] = await Promise.all([
        BabyStateModel.findOne({ weekNumber: numberWeek }),
        MomStateModel.findOne({ weekNumber: numberWeek })
    ]);
    
    if (!baby || !mom) {
        throw createHttpError(404, `Information for week ${numberWeek} not found`);
    }

    const { daysLeft } = getCurrentWeek({ dueDate });

    return {
        daysToBirth: daysLeft,
        baby,
        mom
    };
}
