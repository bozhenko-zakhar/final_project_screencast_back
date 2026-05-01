import crypto from "node:crypto";
import createHttpError from "http-errors";
import { User } from "../../models/user.js";
import { sendEmail } from "../../utils/sendEmail.js";

export const updateUser = async (req, res) => {
  const { gender, date, name, newEmail } = req.body;
  const userId = req.user._id;

  if (!newEmail) {
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { gender, date, name },
      { returnDocument: "after" }
    );

    if (!user) {
      throw createHttpError(404, "User not found");
    }

    return res.status(200).json(user);
  }

  const existingUser = await User.findOne({
    email: newEmail,
    _id: { $ne: userId },
  });

  if (existingUser) {
    throw createHttpError(409, "This email address is already in use.");
  }

  // тимчасово прибрано: const verificationToken = crypto.randomBytes(32).toString("hex");

  const user = await User.findOneAndUpdate(
    { _id: userId },
    {
      gender,
      date,
      name,
      newEmail,
      // тимчасово прибрано: emailVerificationToken: verificationToken,
    },
    { returnDocument: "after" }
  );

  if (!user) {
    throw createHttpError(404, "User not found");
  }

  // тимчасово прибрано: const verifyLink = `${process.env.BASE_URL}/api/users/verify-email/${verificationToken}`;

  /* тимчасово прибрано: await sendEmail({
    to: newEmail,
    subject: "Підтвердження електронної пошти",
    html: `
      <h3>Підтвердження електронної пошти</h3>
      <a href="${verifyLink}">${verifyLink}</a>
    `,
  }); */

  return res.status(200).json({
    // тимчасово прибрано: message: "Лист для підтвердження надіслано",
    user
  });
};
