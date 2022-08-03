import authRouter from './authRoutes.js';
import productRouter from './producRoutes.js';
import seedRouter from './seederRouter.js';
import userRouter from './userRoutes.js';

export const router = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/api/users', userRouter);
  app.use('/api/seed', seedRouter);
  app.use('/api/products', productRouter);
};
