import { Session } from '../../models/session.js';

export const logoutUser = async (req, res, next) => {
  try {
    const { sessionId } = req.cookies;

    if (sessionId) {
      await Session.deleteOne({ _id: sessionId });
    }
    res.clearCookie('accessToken', { sameSite: 'none', secure: true });
    res.clearCookie('refreshToken', { sameSite: 'none', secure: true });
    res.clearCookie('sessionId', { sameSite: 'none', secure: true });

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
