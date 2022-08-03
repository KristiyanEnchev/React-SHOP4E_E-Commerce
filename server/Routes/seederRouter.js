<<<<<<< HEAD
import express from 'express';
import * as controller from '../Controllers/seederController.js';

const seedRouter = express.Router();

seedRouter.get('/', controller.seeder);

export default seedRouter;
=======
import express from 'express';
import * as controller from '../Controllers/seederController.js';

const seedRouter = express.Router();

seedRouter.get('/', controller.seeder);

export default seedRouter;
>>>>>>> df3aa0355ae16a734cfeb3d038f575eb7c7de743
