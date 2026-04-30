import createHttpError from "http-errors";
import { EmotionModel } from "../../models/emotions.js";

export const getEmotions = async (req, res, next) => {
	try {
		const emotions = await EmotionModel.find();

		if (!emotions) {
			throw createHttpError(404, "Emotions not found");
		}

		res.status(200).json({ emotions });
	} catch (err) {
		next(err);
	}
}