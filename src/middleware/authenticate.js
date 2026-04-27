import createHttpError from 'http-errors';

import { Session } from '../models/session.js';
import { User } from '../models/user.js';

export const authenticate = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;
    if (!accessToken) {
      throw createHttpError(401, 'Missing access token');
    }

    const session = await Session.findOne({ accessToken });
    if (!session) {
      throw createHttpError(401, 'Session not found');
    }

    const isExpired =
      Date.now() > new Date(session.accessTokenValidUntil).getTime();

    if (isExpired) {
      await Session.deleteOne({ _id: session._id });
      throw createHttpError(401, 'Access token expired');
    }

    const user = await User.findById(session.userId).select('-password');
    if (!user) {
      throw createHttpError(401, 'User not found ');
    }

    req.user = user;
    return next();
  } catch (err) {
    next(err);
  }
};
