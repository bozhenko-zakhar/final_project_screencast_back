import createHttpError from 'http-errors';
import { User } from '../../models/user.js';

export const updateUserData = async (req, res, next) => {
  try {
    const { username, email } = req.body;
    const userId = req.user._id;

    // Check if email is already taken by another user
    if (email) {
      const existingUser = await User.findOne({ email, _id: { $ne: userId } });
      if (existingUser) {
        throw createHttpError(409, 'Email already in use');
      }
    }

    const updateData = {};
    if (username !== undefined) updateData.username = username;
    if (email !== undefined) updateData.email = email;

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });

    if (!updatedUser) {
      throw createHttpError(404, 'User not found');
    }

    res.json({
      status: 200,
      message: 'User data updated successfully',
      data: updatedUser,
    });
  } catch (err) {
    next(err);
  }
};