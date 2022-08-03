import express from 'express';
import { isAdmin, isAuth } from '../Middleware/Auth.js';
import * as controller from '../Controllers/productController.js';

const productRouter = express.Router();

productRouter.get('/', controller.getAllProducts);
productRouter.get('/banners', controller.getBanners);

productRouter.get('/:slug', controller.getProductBySlug);
productRouter.get('/:productId', isAuth, controller.getProductById);

productRouter.post('/', isAuth, isAdmin, controller.createProduct);
productRouter.put('/:productId', isAuth, isAdmin, controller.editProduct);
productRouter.delete('/:productId', isAuth, isAdmin, controller.deleteProduct);

export default productRouter;
