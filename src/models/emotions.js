import { Schema, model } from 'mongoose';

const emotionSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Назва емоції обовʼязкова'],
      unique: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const EmotionModel = model('emotion', emotionSchema);
