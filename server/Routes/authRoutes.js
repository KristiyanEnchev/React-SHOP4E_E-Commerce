<<<<<<< HEAD
import express from 'express';
import * as controller from '../Controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/register', controller.register);
authRouter.post('/login', controller.login);
authRouter.get('/logout', controller.logout);

export default authRouter;
=======
import express from 'express';
import * as controller from '../Controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/register', controller.register);
authRouter.post('/login', controller.login);
authRouter.get('/logout', controller.logout);

export default authRouter;
>>>>>>> df3aa0355ae16a734cfeb3d038f575eb7c7de743
