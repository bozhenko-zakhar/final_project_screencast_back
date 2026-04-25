import { Schema, model } from "mongoose";

const babyStateSchema = new Schema({
    analogy: String,
    weekNumber: { type: Number, required: true },
    babySize: Number,
    babyWeight: Number,
    image: String,
    babyActivity: String,
    babyDevelopment: String,
    interestingFact: String,
    momDailyTips: [String],
});

export const BabyStateModel = model("baby_state", babyStateSchema)