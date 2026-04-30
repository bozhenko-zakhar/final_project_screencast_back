import { MomStateModel } from "../../models/mom_state.js";
import { getWeekInfo } from "./getWeekInfo.js";
import { getCurrentWeek } from "../../services/getCurrentWeek.js";

export const getMomStateInfo = async(req, res) => {

    const {currentWeek} = getCurrentWeek(req.user);

    const momState = await MomStateModel.findOne({
        weekNumber: currentWeek
    });

    if(!momState) {
       throw createHttpError(404, 'Mom state not found');
    };

    res.status(200).json(momState);
}