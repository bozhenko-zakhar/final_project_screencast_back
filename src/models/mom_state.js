import { Schema, model } from 'mongoose';

// remove comfortTipSchema
const comfortTipSchema = new Schema(
  {
    category: { type: String, required: true },
    tip: { type: String, required: true },
  },
  { _id: false },
);

// rewrite momStateSchema
const momStateSchema = new Schema(
  {
    weekNumber: {
      type: Number,
      required: [true, 'Номер тижня обовʼязковий'],
      unique: true,
    },
    feelings: {
      states: {
        type: [String],
        default: [],
      },
      sensationDescr: {
        type: String,
        required: true,
      },
    },
    comfortTips: {
      type: [comfortTipSchema],
      default: [],
    },
  },
  { timestamps: true, versionKey: false },
);

export const MomStateModel = model('mom_state', momStateSchema);
