import express from 'express';
import * as controller from '../Controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/register', controller.register);
authRouter.post('/login', controller.login);
authRouter.get('/logout', controller.logout);

export default authRouter;
