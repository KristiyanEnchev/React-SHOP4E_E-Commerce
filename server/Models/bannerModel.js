<<<<<<< HEAD
import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema(
  //   {
  //     img: { type: String, required: true },
  //     title: { type: String, required: true },
  //     description: { type: String, required: true },
  //     backgroudCollor: { type: String, required: true },
  //   },
  {
    img: { type: String, required: true },
    samllText: { type: String, required: false },
    midText: { type: String, required: true },
    largeText: { type: String, required: false },
    buttonText: { type: String, required: true },
    productSlug: { type: String, required: true },
    description: { type: String, required: true },
    discount: { type: String, required: false },
    backgroudColor: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Banner = mongoose.models.Banner || mongoose.model('Banner', bannerSchema);
export default Banner;
=======
import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema(
  //   {
  //     img: { type: String, required: true },
  //     title: { type: String, required: true },
  //     description: { type: String, required: true },
  //     backgroudCollor: { type: String, required: true },
  //   },
  {
    img: { type: String, required: true },
    samllText: { type: String, required: false },
    midText: { type: String, required: true },
    largeText: { type: String, required: false },
    buttonText: { type: String, required: true },
    productSlug: { type: String, required: true },
    description: { type: String, required: true },
    discount: { type: String, required: false },
    backgroudColor: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Banner = mongoose.models.Banner || mongoose.model('Banner', bannerSchema);
export default Banner;
>>>>>>> df3aa0355ae16a734cfeb3d038f575eb7c7de743
