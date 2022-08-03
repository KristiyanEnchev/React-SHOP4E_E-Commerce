import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getBanners } from '../../../redux/BannerSlice.js';
import { Loader } from '../Loader/Loader.js';

const FooterBanner = () => {
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
      setBanner(banners[1]);
    }
  }, [banners, status]);

  if (status === 'loading') {
    return <Loader></Loader>;
  } else {
    return (
      <div className="footer-banner-container">
        <div className="banner-desc">
          <div className="left">
            <p>{banner.discount}</p>
            <h3>{banner.midText}</h3>
          </div>
          <div className="right">
            <p>{banner.samllText}</p>
            <h3>{banner.largeText}</h3>
            <p>{banner.description}</p>
            <Link to={`/product/${banner.productSlug}`}>
              <button type="button">{banner.buttonText}</button>
            </Link>
          </div>

          {/* <img
            style={{ height: '400px', with: '500px' }}
            src={banner.img}
            alt="banner"
            className="footer-banner-image"
          /> */}
        </div>
      </div>
    );
  }
};

export default FooterBanner;
