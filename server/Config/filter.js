import path from 'path';
import { fileURLToPath } from 'url';
import { errorHandler } from '../Utils/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allowed = ['.js', '.css', '.png', '.jpg', '.jpeg', '.ico'];

export const filter = (app) => {
  app.get('*', (req, res) => {
    try {
      if (allowed.filter((ext) => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(`public/${req.url}`));
      } else {
        res.sendFile(path.join(__dirname, '../public/index.html'));
      }
    } catch (error) {
      errorHandler(error, res, req);
    }
  });
};
