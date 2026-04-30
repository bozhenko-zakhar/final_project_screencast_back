import createHttpError from "http-errors";
import { User } from "../../models/user.js";

export const verifyEmail = async (req, res) => {
  const { token } = req.params;

  const user = await User.findOne({
    emailVerificationToken: token,
  });

  if (!user) {
    throw createHttpError(404, "User not found");
  }

  user.email = user.newEmail;
  user.newEmail = null;
  user.emailVerificationToken = null;

  await user.save();

  res.status(200).json({
    message: "Email verified successfully",
  });
};