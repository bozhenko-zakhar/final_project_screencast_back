import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';
import { User } from '../models/user.js';
import { sendEmail } from '../utils/sendMail.js';
import bcrypt from 'bcrypt';

export const requestResetEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(200).json({ message: 'Password reset email sent successfully' });
  }

  const resetToken = jwt.sign(
    { sub: user._id, email },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );

  const resetUrl = `${process.env.FRONTEND_DOMAIN}/reset-password?token=${resetToken}`;

  try {
    await sendEmail({
      to: email,
      subject: 'Reset your password',
      html: `<p>To reset your password, click <a href="${resetUrl}">here</a>.</p>`,
    });
  } catch (error) {
    throw createHttpError(500, 'Failed to send the email, please try again later.');
  }

  res.status(200).json({ message: 'Password reset email sent successfully' });
};

export const resetPassword = async (req, res) => {
  const { token, password } = req.body;

  let payload;
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    throw createHttpError(401, 'Invalid or expired token');
  }

  const user = await User.findOne({ _id: payload.sub, email: payload.email });
  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  // Хешуємо новий пароль
  const hashedPassword = await bcrypt.hash(password, 10);
  
  await User.findByIdAndUpdate(user._id, { password: hashedPassword });

  res.status(200).json({ message: 'Password reset successfully' });
};