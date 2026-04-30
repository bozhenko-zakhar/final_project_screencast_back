import { Schema, model } from 'mongoose';

const babyStateSchema = new Schema(
  {
    weekNumber: {
      type: Number,
      required: [true, 'weekNumber is required'],
      unique: true, // clear
    },
    analogy: {
      type: String,
      default: null,
    },
    babySize: {
      type: Number,
      required: true,
    },
    babyWeight: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    babyActivity: {
      type: String,
      required: true,
    },
    babyDevelopment: {
      type: String,
      required: true,
    },
    interestingFact: {
      type: String,
    },
    momDailyTips: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true, versionKey: false },
);

export const BabyStateModel = model('baby_state', babyStateSchema);
