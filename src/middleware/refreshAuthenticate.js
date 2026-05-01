import createHttpError from 'http-errors';

import { Session } from '../models/session.js';
import { User } from '../models/user.js';
import { generateTokens } from '../services/index.js';
import { FIFTEEN_MINUTES, ONE_DAY } from '../constants/time.js';
import { setSessionCookies } from '../services/auth.js';

export const refreshAuthenticate = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      throw createHttpError(401, 'Mising refresh token');
    }

    const session = await Session.findOne({ refreshToken });
    if (!session) {
      throw createHttpError(401, 'Session not found');
    }

    const isExpired =
      Date.now() > new Date(session.refreshTokenValidUntil).getTime();
    if (isExpired) {
      await Session.deleteOne({ _id: session._id });
      throw createHttpError(401, 'Refresh token expired');
    }

    const user = await User.findById(session.userId).select('-password');
    if (!user) {
      throw createHttpError(401, 'User not found');
    }

    const tokens = generateTokens();

    session.accessToken = tokens.accessToken;
    session.refreshToken = tokens.refreshToken;
    session.accessTokenValidUntil = new Date(Date.now() + FIFTEEN_MINUTES);
    session.refreshTokenValidUntil = new Date(Date.now() + ONE_DAY);

    await session.save();

    setSessionCookies(res, session);

    return res.json({ user });
  } catch (err) {
    next(err);
  }
};
