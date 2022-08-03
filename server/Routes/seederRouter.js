import express from 'express';
import * as controller from '../Controllers/seederController.js';

const seedRouter = express.Router();

seedRouter.get('/', controller.seeder);

export default seedRouter;
