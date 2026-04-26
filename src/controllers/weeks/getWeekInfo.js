import { BabyStateModel } from "../../models/baby_state.js";
import { User } from "../../models/user.js";
import { getCurrentWeek } from "../../services/getCurrentWeek.js";

export const getWeekInfo = async (req, res) => {
  const { currentWeek, daysLeft } = getCurrentWeek(req.user);

  const babyState = await BabyStateModel.findOne({
    weekNumber: currentWeek,
  });

     if(!babyState) {
        return res.status(404).json({message: 'Baby state not found'});
    };

  res.status(200).json({ babyState, daysLeft });
};
