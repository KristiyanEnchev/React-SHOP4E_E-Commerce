import jwt from 'jsonwebtoken';
// import {
//   AuthorizationError,
//   CredentialError,
// } from '../Utils/validationErrors.js';

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

// export const isAuth = (req, res, next) => {
//   const authorization = req.headers.authorization;
//   if (authorization) {
//     // const token = authorization.split(' ')[1];
//     const token = authorization.slice(7, authorization.length);
//     if (blacklist.has(token)) {
//       // throw new AuthorizationError('Expired Token', 401);
//       return res.status(401).send({ message: 'Expired Token' });
//     }

//     jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
//       if (err) {
//         // throw new AuthorizationError('Invalid Token', 401);
//         res.status(401).send({ message: 'Invalid Token' });
//       } else {
//         req.user = decode;
//         next();
//       }
//     });
//   } else {
//     // throw new AuthorizationError('No Token', 401);
//     res.status(401).send({ message: 'No Token' });
//   }
// };

// export const isAdmin = (req, res, next) => {
//   if (req.user && req.user.isAdmin) {
//     next();
//   } else {
//     // throw new CredentialError('Invalid Admin Token', 403);
//     res.status(401).send({ message: 'Invalid Admin Token' });
//   }
// };
const config = process.env;
const verifyToken = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (authorization) {
    const token = authorization.split(' ')[1];

    if (blacklist.has(token)) {
      return res.status(401).send({ message: 'Expired Token' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Invalid Token' });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'No Token' });
  }

  // const token =
  //   req.body.token || req.query.token || req.headers['authorization'];

  // if (!token) {
  //   return res.status(403).send('A token is required for authentication');
  // }
  // try {
  //   const decoded = jwt.verify(token, config.JWT_SECRET);
  //   req.user = decoded;
  // } catch (err) {
  //   return res.status(401).send('Invalid Token');
  // }
  // return next();
};

export const isAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user._id === req.params._id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('You are not alowed to do that!');
    }
  });
};

export const isAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('You are not alowed to do that!');
    }
  });
};
