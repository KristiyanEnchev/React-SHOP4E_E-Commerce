<<<<<<< HEAD
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { NotFoundError, RequestError } from '../Utils/validationErrors.js';

//GET ALL USERS
export const getAll = expressAsyncHandler(async (req, res) => {
  const query = req.query.new;
  const users = query
    ? await User.find().sort({ _id: -1 }).limit(5)
    : await User.find();
  res.status(200).json(users);
});

//GET USER BY ID
export const getUser = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userId);

  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'User Not Found' });
    // throw new NotFoundError('User Not Found', 404);
  }
});

//UPDATE USER
export const updateUser = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = Boolean(req.body.isAdmin);
    const updatedUser = await user.save();
    res.send({ message: 'User Updated', user: updatedUser });
  } else {
    // throw new NotFoundError('User Not Found', 404);
    res.status(404).send({ message: 'User Not Found' });
  }
});

//DELETE USER
export const deleteUser = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (user) {
    if (user.email === 'admin@example.com') {
      // throw new RequestError('Can Not Delete Admin User');
      res.status(400).send({ message: 'Can Not Delete Admin User' });
    }
    await user.remove();
    res.send({ message: 'User Deleted' });
  } else {
    // throw new NotFoundError('User Not Found', 404);
    res.status(404).send({ message: 'User Not Found' });
  }
});
=======
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { NotFoundError, RequestError } from '../Utils/validationErrors.js';

//GET ALL USERS
export const getAll = expressAsyncHandler(async (req, res) => {
  const query = req.query.new;
  const users = query
    ? await User.find().sort({ _id: -1 }).limit(5)
    : await User.find();
  res.status(200).json(users);
});

//GET USER BY ID
export const getUser = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userId);

  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'User Not Found' });
    // throw new NotFoundError('User Not Found', 404);
  }
});

//UPDATE USER
export const updateUser = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = Boolean(req.body.isAdmin);
    const updatedUser = await user.save();
    res.send({ message: 'User Updated', user: updatedUser });
  } else {
    // throw new NotFoundError('User Not Found', 404);
    res.status(404).send({ message: 'User Not Found' });
  }
});

//DELETE USER
export const deleteUser = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (user) {
    if (user.email === 'admin@example.com') {
      // throw new RequestError('Can Not Delete Admin User');
      res.status(400).send({ message: 'Can Not Delete Admin User' });
    }
    await user.remove();
    res.send({ message: 'User Deleted' });
  } else {
    // throw new NotFoundError('User Not Found', 404);
    res.status(404).send({ message: 'User Not Found' });
  }
});
>>>>>>> df3aa0355ae16a734cfeb3d038f575eb7c7de743
