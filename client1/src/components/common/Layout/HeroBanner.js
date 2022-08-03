import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getBanners } from '../../../redux/BannerSlice.js';
import { Loader } from '../Loader/Loader.js';

const HeroBanner = () => {
  const dispatch = useDispatch();
  const [banner, setBanner] = useState({});
  const { banners, status } = useSelector((state) => state.banners);

  useEffect(() => {
    const asyncDispatch = () => {
      dispatch(getBanners());
    };

    asyncDispatch();
  }, [dispatch]);

  useEffect(() => {
    if (status === 'succeeded') {
      setBanner(banners[0]);
    }
  }, [banners, status]);

  if (status === 'loading') {
    return <Loader></Loader>;
  } else {
    return (
      <>
        {banner && (
          <div className="hero-banner-container">
            <div>
              <p className="beats-solo">{banner.samllText}</p>
              <h3>{banner.midText}</h3>
              <h1>{banner.largeText}</h1>
              <img
                src={`${banner.img}`}
                alt="sneakers"
                className="hero-banner-image"
              />

              <div>
                <Link to={`/product/${banner.productSlug}`}>
                  <button type="button">{banner.buttonText}</button>
                </Link>
                <div className="desc">
                  <h5>Description</h5>
                  <p>{banner.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
};

export default HeroBanner;
