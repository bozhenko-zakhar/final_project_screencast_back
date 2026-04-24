import { User } from '../../models/user.js';
import { createSession, setSessionCookies } from '../../services/auth.js';

import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';


export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw createHttpError(400, 'Email in use');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    email,
    password: hashedPassword,
  });
  const newSession = await createSession(user._id);
  setSessionCookies(res, newSession);

  res.status(201).json(user);
};
