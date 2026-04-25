import createHttpError from 'http-errors';

import { Session } from '../../models/session.js';
import { createSession, setSessionCookies } from '../../services/auth.js';

export const refreshUserSession = async (req, res, next) => {
  try {
    const { refreshToken, sessionId } = req.cookies;
    if (!refreshToken || !sessionId) {
      throw createHttpError(401, 'Missing refresh token ');
    }

    const session = await Session.findOne({
      _id: sessionId,
      refreshToken,
    });
    if (!session) {
      throw createHttpError(401, 'Session not found');
    }

    const isTokenExpired =
      Date.now() > new Date(session.refreshTokenValidUntil).getTime();
    if (isTokenExpired) {
      throw createHttpError(401, 'Session token is expired');
    }

    await Session.deleteOne({ _id: session._id });

    const newSession = await createSession(session.userId);
    setSessionCookies(res, newSession);

    res.status(200).json({ message: 'Session refreshed' });
  } catch (err) {
    next(err);
  }
};
