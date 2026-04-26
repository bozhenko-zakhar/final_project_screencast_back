import { Schema, model } from "mongoose";

const momStateSchema = new Schema({
  weekNumber: {
    type: Number,
  },
  feelings: {
    states: [String],
    sensationDescr: String,
  },
  comfortTips: [
    {
      category: String,
      tip: String,
    },
  ],
});

export const MomStateModel = model("mom_state", momStateSchema);
