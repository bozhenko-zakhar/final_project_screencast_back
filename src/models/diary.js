import { Schema, model } from "mongoose";

const getCurrentDate = () => new Date().toISOString().slice(0, 10);

const diarySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 64,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 1000,
    },
    date: {
      type: String,
      required: true,
      default: getCurrentDate,
      match: /^\d{4}-\d{2}-\d{2}$/,
    },
    emotions: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "emotion",
        },
      ],
      required: true,
      validate: {
        validator: (value) => value.length >= 1 && value.length <= 12,
        message: "Emotions must contain from 1 to 12 items",
      },
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Diary = model("Diary", diarySchema);