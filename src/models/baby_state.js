import { Schema, model } from "mongoose";

const babyStateSchema = new Schema({
  analogy: {
    type: String,
  },
  weekNumber: {
    type: Number,
  },
  babyWeight: {
    type: Number,
  },
  image: {
    type: String,
  },
  babyActivity: {
    type: String,
  },
  babyDevelopment: {
    type: String,
  },
  interestingFact: {
    type: String,
  }, 
  momDailyTips: {
    type: [String],
    default: [],
  },
});

export const BabyStateModel = model("baby_state", babyStateSchema);
