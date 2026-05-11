import "dotenv/config";
import mongoose from "mongoose";

import { EmotionModel } from "../models/emotions.js";

const emotions = [
  { title: "Радість" },
  { title: "Тривога" },
  { title: "Сум" },
  { title: "Спокій" },
  { title: "Втома" },
  { title: "Страх" },
  { title: "Злість" },
  { title: "Ніжність" },
];

const seedEmotions = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    await EmotionModel.deleteMany({});
    await EmotionModel.insertMany(emotions);

    console.log("Emotions seeded successfully");

    process.exit(0);
  } catch (error) {
    console.error("Seed emotions failed:", error);
    process.exit(1);
  }
};

seedEmotions();