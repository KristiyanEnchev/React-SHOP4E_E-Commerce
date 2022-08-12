import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { printDate } from '../../Helpers/FormatHelper';
import { Loader } from '../../../../components/common/Loader/Loader.js';
import { closeModal } from '../../../../redux/Public/modalSlice.js';
import { UserActions } from '../../Helpers/UserListConstants.js';
import {
  getProductById,
  selectProduct,
} from '../../../../redux/Public/productSlice.js';

export const DetailsProduct = ({ objectId }) => {
  const blankPictueUrl =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';

  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const { name, image, slug, category, loading } = product;

  useEffect(() => {
    dispatch(getProductById(objectId));
  }, [dispatch, objectId]);

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="overlay">
          <div
            className="backdrop"
            onClick={() => dispatch(closeModal({ action: UserActions.Close }))}
          />
          <div className="modal">
            <div className="detail-container">
              <header className="headers">
                <h2>Product Detail</h2>
                <button
                  className="btn-admin close"
                  onClick={() =>
                    dispatch(closeModal({ action: UserActions.Close }))
                  }
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="xmark"
                    className="svg-inline--fa fa-xmark"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                    ></path>
                  </svg>
                </button>
              </header>
              <div className="content">
                <div className="image-container">
                  <img
                    src={image || blankPictueUrl}
                    alt="user-pic"
                    className="image-admin image-profile"
                  />
                </div>
                <div className="user-details">
                  <p>
                    Product Id: <strong>{product._id}</strong>
                  </p>
                  <p>
                    Name:
                    <strong> {name} </strong>
                  </p>
                  <p>
                    Category: <strong>{category}</strong>
                  </p>
                  <p>
                    Slug: <strong>{slug}</strong>
                  </p>

                  <p>
                    In Stock: <strong>{product.countInStock}</strong>
                  </p>

                  <p>
                    Created on: <strong>{printDate(product.createdAt)}</strong>
                  </p>
                  <p>
                    Modified on: <strong>{printDate(product.updatedAt)}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
