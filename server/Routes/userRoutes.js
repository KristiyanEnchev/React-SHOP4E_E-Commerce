import express from 'express';
import { isAdmin, isAuth } from '../Middleware/Auth.js';
import * as controller from '../Controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/', isAuth, isAdmin, controller.getAll);
userRouter.get('/:userId', isAdmin, isAuth, controller.getUser);
userRouter.post('/create', isAdmin, isAuth, controller.createUser);
userRouter.put('/:userId', isAuth, controller.updateUser);
userRouter.delete('/:userId', isAuth, isAdmin, controller.deleteUser);

export default userRouter;
