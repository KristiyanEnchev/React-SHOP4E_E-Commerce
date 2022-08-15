import express from 'express';
import multer from 'multer';
import * as controller from '../Controllers/uploadController.js';

const userUploadRouter = express.Router();
const upload = multer();

userUploadRouter.post(
  '/profile',
  upload.single('file'),
  controller.uploadPicture
);

export default userUploadRouter;
