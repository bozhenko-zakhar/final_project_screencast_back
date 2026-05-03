import { Schema, model } from 'mongoose';

const emotionSchema = new Schema({
	title: {
		type: String,
		required: [true, 'Emotion\'s title is required']
	}},
  {
		timestamps: true,
		versionKey: false
	},
);

export const EmotionModel = model('Emotion', emotionSchema);
