import Product from '../Models/productModel.js';
import expressAsyncHandler from 'express-async-handler';
import Banner from '../Models/bannerModel.js';

//GET ALL PRODUCTS
export const getAllProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

//GET PRODUCT BY ID
export const getProductById = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.productId);
  res.status(200).json(product);
});

//GET PRODUCT BY SLUG
export const getProductBySlug = expressAsyncHandler(async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  res.status(200).json(product);
});

//CREATE PRODUCT
export const createProduct = expressAsyncHandler(async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.status(200).json(savedProduct);
});

//UPDATE PRODUCT
export const editProduct = expressAsyncHandler(async (req, res) => {
  // const updatedProduct = await Product.findByIdAndUpdate(
  //   req.params.productId,
  //   {
  //     $set: req.body,
  //   },
  //   { new: true }
  // );
  // res.status(200).json(updatedProduct);

  const product = await Product.findById(req.params.productId);
  if (product) {
    product.name = req.body.name || product.name;
    product.slug = req.body.slug || product.slug;
    product.price = req.body.price || product.price;
    product.image = req.bodyimage || product.image;
    product.category = req.body.category || product.category;
    product.countInStock = req.body.countInStock || product.countInStock;
    product.description = req.body.description || product.description;

    const updatedproduct = await product.save();
    res.send({ message: 'product Updated', product: updatedproduct });
  } else {
    res.status(404).send({ message: 'product Not Found' });
  }
});

//DELETE PRODUCT
export const deleteProduct = expressAsyncHandler(async (req, res) => {
  await Product.findByIdAndDelete(req.params.productId);
  res.status(200).json('Product has been deleted...');
});

//GET BANNERS
export const getBanners = expressAsyncHandler(async (req, res) => {
  const banners = await Banner.find();
  res.send(banners);
});
