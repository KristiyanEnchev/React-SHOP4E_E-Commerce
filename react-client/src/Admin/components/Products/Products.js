import React, { useEffect } from 'react';

import Header from '../Header.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProduct,
  getProducts,
  selectProducts,
} from '../../../redux/Public/productsSlice.js';
import { useStateContext } from '../../contexts/ContextProvider.js';
import { openModal } from '../../../redux/Public/modalSlice.js';
import { UserActions } from '../Helpers/UserListConstants.js';
import { ProductCard } from './ProductCard.js';
import { DetailsProduct } from './Modals/DetailsProduct.js';
import { EditProduct } from './Modals/EditProduct.js';
import { CreateProduct } from './Modals/CreateProduct.js';
import { Loader } from '../../../components/common/Loader/Loader.js';
import toast from 'react-hot-toast';

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(selectProducts);
  const { isOpen, userAction, objectId } = useSelector((state) => state.modal);
  const { currentColor } = useStateContext();

  const deleteHandler = (e, productID, action) => {
    e.preventDefault();
    const confirm = window.confirm('Are you sure you want to delete this');
    if (confirm) {
      dispatch(deleteProduct(productID));
    } else {
      toast.error('Deletion stoped');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getProducts());
    };
    fetchData();
  }, [dispatch]);
  if (loading) {
    return <Loader></Loader>;
  } else {
    return (
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl some">
        <div style={{ display: 'flex' }}>
          <Header category="Page" title="Product" />
          <button
            style={{ backgroundColor: currentColor }}
            className="btn-add btn-admin"
            onClick={() => dispatch(openModal({ action: UserActions.Create }))}
          >
            Add new product
          </button>
        </div>
        <section className="card-admin users-container">
          {isOpen && userAction === 'details' && (
            <DetailsProduct objectId={objectId} />
          )}
          {isOpen && userAction === 'edit' && (
            <EditProduct objectId={objectId} />
          )}
          {isOpen && userAction === 'create' && <CreateProduct />}

          <div className="table-wrapper">
            <table className="table">
              <thead style={{ backgroundColor: currentColor }}>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((product) => (
                    <tr key={product._id}>
                      <ProductCard
                        product={product}
                        deleteHandler={deleteHandler}
                      />
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
};
export default Products;
