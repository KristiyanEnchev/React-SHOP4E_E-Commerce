<<<<<<< HEAD
import cors from 'cors';
const whitelist = ['http://localhost:3000', 'http://localhost:5000'];

export const expressConfig = (app, express) => {
  app.use(express.static('public'));
  app.use(cors({ origin: whitelist, creadentias: true }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use((error, req, res, next) => {
    try {
      if (res.headerSent) {
        return next(error);
      }
      res
        .status(error.code || 500)
        .json({ message: error.message || 'An unknown error occurred!' });
    } catch (error) {
      errorHandler(error, res, req);
    }
  });
};
=======
import cors from 'cors';
const whitelist = ['http://localhost:3000', 'http://localhost:5000'];

export const expressConfig = (app, express) => {
  app.use(express.static('public'));
  app.use(cors({ origin: whitelist, creadentias: true }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use((error, req, res, next) => {
    try {
      if (res.headerSent) {
        return next(error);
      }
      res
        .status(error.code || 500)
        .json({ message: error.message || 'An unknown error occurred!' });
    } catch (error) {
      errorHandler(error, res, req);
    }
  });
};
>>>>>>> df3aa0355ae16a734cfeb3d038f575eb7c7de743
