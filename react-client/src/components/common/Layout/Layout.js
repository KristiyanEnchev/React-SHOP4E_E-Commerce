import { Outlet } from 'react-router-dom';
import FooterBanner from './FooterBanner.js';
import HeroBanner from './HeroBanner.js';
import { useEffect } from 'react';
import { ProductCard } from '../../Product/ProductCard.js';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, selectProducts } from '../../../redux/productsSlice.js';

const Layout = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(selectProducts);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getProducts());
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      <div className="layout">
        <main className="main-container">
          <HeroBanner />
          <div className="products-heading">
            <h2>Best Seller Products</h2>
            <p>Sneakers There are many variations passages</p>
          </div>
          <div className="products-container">
            {products &&
              products?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <FooterBanner />
        </main>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
