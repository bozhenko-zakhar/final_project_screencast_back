import crypto from 'node:crypto';
import { Session } from '../models/session.js';
import { FIFTEEN_MINUTES, ONE_DAY } from '../constants/time.js';

export const createSession = async (userId) => {
  return Session.create({
    userId,
    accessToken: crypto.randomBytes(30).toString('base64'),
    refreshToken: crypto.randomBytes(30).toString('base64'),
    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + ONE_DAY),
  });
};

export const generateTokens = () => ({
  accessToken: crypto.randomBytes(30).toString('hex'),
  refreshToken: crypto.randomBytes(30).toString('hex'),
});

const isProduction = process.env.NODE_ENV === 'production'; //додано

export const setSessionCookies = (res, session) => {
  res.cookie('accessToken', session.accessToken, {
    httpOnly: true,
    secure: isProduction, //змінено
    sameSite: isProduction ? 'none' : 'lax', //змінено
    path: '/', //додано
    maxAge: FIFTEEN_MINUTES,
  });

  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    secure: isProduction, //змінено
    sameSite: isProduction ? 'none' : 'lax', //змінено
    path: '/', //додано
    maxAge: ONE_DAY,
  });

  res.cookie('sessionId', String(session._id), {
    httpOnly: true,
    secure: isProduction, //змінено
    sameSite: isProduction ? 'none' : 'lax', //змінено
    path: '/', //додано
    maxAge: ONE_DAY,
  });
};
