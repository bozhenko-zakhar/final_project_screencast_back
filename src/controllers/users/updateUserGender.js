import createHttpError from "http-errors";
import { User } from "../../models/user.js";

export const updateUserGender = async (req, res) => {
  const { gender } = req.body;
  const userId = req.user._id;

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { gender },
    { new: true, runValidators: true }
  );

  if (!updatedUser) {
    throw createHttpError(404, "User not found");
  }

  res.status(200).json({
    message: "Gender updated",
    updatedUser,
  });
};