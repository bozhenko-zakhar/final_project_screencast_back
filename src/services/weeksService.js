import { BabyStateModel } from "../models/baby_state.js";
import { MomStateModel } from "../models/mom_state.js";
import createHttpError from 'http-errors';

export const getWeekData = async () => {

    const numberWeek = 1; 
    const daysToBirth = 280;
    
    const [baby, mom] = await Promise.all([
        BabyStateModel.findOne({ weekNumber: numberWeek }),
        MomStateModel.findOne({ weekNumber: numberWeek })
    ]);
    
    if (!baby || !mom) {
        throw createHttpError(404, `Information for week ${numberWeek} not found`);
    }

    return {
        daysToBirth,
        baby,
        mom
    };
}
