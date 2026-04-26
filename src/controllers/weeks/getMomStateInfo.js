import { MomStateModel } from "../../models/mom_state.js";
import { getWeekInfo } from "./getWeekInfo.js";
import { getCurrentWeek } from "../../services/getCurrentWeek.js";

export const getMomStateInfo = async(req, res) => {

    const {currentWeek} = getCurrentWeek(req.user);

    const momState = await MomStateModel.findOne({
        weekNumber: currentWeek
    });

    if(!momState) {
        return res.status(404).json({message: 'Mom state not found'});
    };

    res.status(200).json(momState);
}