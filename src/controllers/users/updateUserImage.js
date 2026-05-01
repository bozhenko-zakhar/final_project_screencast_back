import createHttpError from 'http-errors';
import { User } from '../../models/user.js';

export const updateUserImage = async (req, res, next) => {
  try {
    const { avatar } = req.body; // assuming avatar is a URL string
    const userId = req.user._id;

    const updatedUser = await User.findByIdAndUpdate(userId, { avatar }, { new: true });

    if (!updatedUser) {
      throw createHttpError(404, 'User not found');
    }

    res.json({
      status: 200,
      message: 'User avatar updated successfully',
      data: updatedUser,
    });
  } catch (err) {
    next(err);
  }
};