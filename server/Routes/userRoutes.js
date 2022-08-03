import express from 'express';
import { isAdmin, isAuth } from '../Middleware/Auth.js';
import * as controller from '../Controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/', isAuth, isAdmin, controller.getAll);
userRouter.get('/:userId', isAuth, controller.getUser);
userRouter.put('/:userId', isAuth, isAdmin, controller.updateUser);
userRouter.delete('/:userId', isAuth, isAdmin, controller.deleteUser);

export default userRouter;
