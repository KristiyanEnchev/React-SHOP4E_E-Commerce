import data from '../Seed/data.js';
import User from '../Models/userModel.js';
import Product from '../Models/productModel.js';
import Banner from '../Models/bannerModel.js';

export const seeder = async (req, res) => {
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  await Banner.deleteMany({});
  const createdBanners = await Banner.insertMany(data.banners);
  res.send({ createdUsers, createdProducts, createdBanners });
};
