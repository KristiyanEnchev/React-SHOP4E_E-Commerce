import jwt from 'jsonwebtoken';
import {
  AuthorizationError,
  CredentialError,
} from '../Utils/validationErrors.js';

export const blacklist = new Set();

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.split(' ')[1];

    if (blacklist.has(token)) {
      throw new AuthorizationError('Expired Token', 401);
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        throw new AuthorizationError('Invalid Token', 401);
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    throw new AuthorizationError('No Token', 401);
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    throw new CredentialError('Invalid Admin Token', 403);
  }
};
