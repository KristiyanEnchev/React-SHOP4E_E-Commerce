import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';

import { blacklist, generateToken } from '../Middleware/Auth.js';
import {
  AuthorizationError,
  ConflictError,
} from '../Utils/validationErrors.js';
import User from '../models/userModel.js';

//REGISTER
// export const register = expressAsyncHandler(async (req, res) => {
//   const existing = await User.findOne({ email: req.body.email });

//   if (existing) {
//     throw new ConflictError('User Already Exists', 409);
//   }

//   const encryptPasswort = bcrypt.hashSync(req.body.password.toString());

//   const newUser = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: encryptPasswort,
//   });

//   const user = await newUser.save();
//   res.status(201).json({
//     _id: user._id,
//     name: user.name,
//     email: user.email,
//     isAdmin: user.isAdmin,
//   });
// });

export const register = expressAsyncHandler(async (req, res) => {
  const existing = await User.findOne({ email: req.body.email });

  if (existing) {
    return res.status(401).send({ message: 'Email is taken' });
  }

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  });

  const user = await newUser.save();

  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user),
  });
});

//LOGIN
// export const login = expressAsyncHandler(async (req, res) => {
//   const user = await User.findOne({ email: req.body.email });

//   if (!user) {
//     throw new AuthorizationError('Wrong email or password', 401);
//   }

//   if (!bcrypt.compareSync(req.body.password.toString(), user.password)) {
//     throw new AuthorizationError('Wrong email or password', 401);
//   }

//   const token = generateToken(user);
//   res.status(200).json({
//     _id: user._id,
//     name: user.name,
//     email: user.email,
//     isAdmin: user.isAdmin,
//     token: token,
//   });
// });

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).send({ message: 'Invalid email or password' });
  }

  if (!bcrypt.compareSync(req.body.password, user.password)) {
    return res.status(401).send({ message: 'Invalid email or password' });
  }

  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    avatar: user.profile.avatar,
    token: generateToken(user),
  });
};

export const logout = expressAsyncHandler(async (req, res) => {
  const { token } = req;
  blacklist.add(token);
  res.status(200).json({
    message: 'User has loged out',
  });
});
