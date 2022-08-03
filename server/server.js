<<<<<<< HEAD
import 'dotenv/config';
import express from 'express';
import { connectDb } from './Config/configureDb.js';
import { config } from './Config/variables.js';
import { expressConfig } from './Config/express.js';
import { filter } from './Config/filter.js';
import { router } from './Routes/router.js';

const app = express();

const start = async () => {
  connectDb(config.dbConnection);
  expressConfig(app, express);
  router(app);
  filter(app);

  app.listen(config.port, () =>
    console.log(`Server at http://${config.host}:${config.port}`)
  );
};

start();
=======
import 'dotenv/config';
import express from 'express';
import { connectDb } from './Config/configureDb.js';
import { config } from './Config/variables.js';
import { expressConfig } from './Config/express.js';
import { filter } from './Config/filter.js';
import { router } from './Routes/router.js';

const app = express();

const start = async () => {
  connectDb(config.dbConnection);
  expressConfig(app, express);
  router(app);
  filter(app);

  app.listen(config.port, () =>
    console.log(`Server at http://${config.host}:${config.port}`)
  );
};

start();
>>>>>>> df3aa0355ae16a734cfeb3d038f575eb7c7de743
