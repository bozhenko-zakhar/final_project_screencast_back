import { BabyStateModel } from "../models/baby_state.js";
import { MomStateModel } from "../models/mom_state.js";
import { calculateDaysLeft } from "../utils/calculateDaysLeft.js";

export const getWeekData = async (weekNumber, dueDate) => {

    const numberWeek = Number(weekNumber)

    const [baby, mom] = await Promise.all([
        BabyStateModel.findOne({ weekNumber: numberWeek }),
        MomStateModel.findOne({ weekNumber: numberWeek })
    ]);
    
    if (!baby || !mom) {
        throw createHttpError(404, `Information for week ${numberWeek} not found`);
    }

    const daysToBirth = calculateDaysLeft(numberWeek, dueDate)

    return {
        daysToBirth,
        baby,
        mom
    };
}
