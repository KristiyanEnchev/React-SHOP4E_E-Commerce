import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  countInStockValidator,
  descriptionValidator,
  priceValidator,
  productCategoryValidator,
  productImageValidator,
  productNameValidator,
  productSlugValidator,
} from '../../../../components/Authentication/Validators.js';
import { Loader } from '../../../../components/common/Loader/Loader.js';
import { closeModal } from '../../../../redux/Public/modalSlice.js';
import {
  getProductById,
  selectProduct,
  setProduct,
} from '../../../../redux/Public/productSlice.js';
import { updateProduct } from '../../../../redux/Public/productsSlice.js';
import { UserActions } from '../../Helpers/UserListConstants.js';

export const EditProduct = ({ objectId }) => {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const { loading } = product;

  useEffect(() => {
    dispatch(getProductById(objectId));
  }, [objectId, dispatch]);

  console.log(product);

  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    dispatch(
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const { countInStock, ...productData } = product;
    productData.countInStock = Number(countInStock);
    dispatch(updateProduct(productData));
    dispatch(closeModal({ action: UserActions.Close }));
  };

  const validator = (e) => {
    setErrors((state) =>
      e.target.name === 'name'
        ? { ...state, [e.target.name]: productNameValidator(product.name) }
        : e.target.name === 'image'
        ? { ...state, [e.target.name]: productImageValidator(product.image) }
        : e.target.name === 'price'
        ? { ...state, [e.target.name]: priceValidator(product.price) }
        : e.target.name === 'slug'
        ? { ...state, [e.target.name]: productSlugValidator(product.slug) }
        : e.target.name === 'category'
        ? {
            ...state,
            [e.target.name]: productCategoryValidator(product.category),
          }
        : e.target.name === 'countInStock'
        ? {
            ...state,
            [e.target.name]: countInStockValidator(product.countInStock),
          }
        : {
            ...state,
            [e.target.name]: descriptionValidator(product.description),
          }
    );
  };

  const isFormValid = !Object.values(errors).some((x) => x);

  if (loading) {
    return <Loader></Loader>;
  } else {
    return (
      <>
        <div className="overlay">
          <div className="backdrop" onClick={() => dispatch(closeModal())} />
          <div className="modal">
            <div className="user-container">
              <header className="headers">
                <h2>Create Product</h2>
                <button
                  className="btn-admin close"
                  onClick={() => dispatch(closeModal())}
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
              <form onSubmit={submitHandler}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Product name</label>
                    <div className="input-wrapper">
                      <span>
                        <AiOutlineShoppingCart />
                      </span>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        defaultValue={product.name}
                        onChange={changeHandler}
                        onBlur={(e) => validator(e)}
                      />
                    </div>
                    {errors.name && (
                      <p className="form-error">
                        Product name should be 3 characters long!
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <div className="input-wrapper">
                      <span>
                        <i className="fa-solid fa-user" />
                      </span>
                      <input
                        id="price"
                        name="price"
                        type="text"
                        defaultValue={product.price}
                        onChange={changeHandler}
                        onBlur={(e) => validator(e)}
                      />
                    </div>
                    {errors.price && (
                      <p className="form-error">
                        Price should be Positive number!
                      </p>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="slug">Product Slug</label>
                    <div className="input-wrapper">
                      <span>
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <input
                        id="slug"
                        name="slug"
                        type="text"
                        defaultValue={product.slug}
                        onChange={changeHandler}
                        onBlur={(e) => validator(e)}
                      />
                    </div>
                    {errors.slug && (
                      <p className="form-error">Product Slug is not valid!</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <div className="input-wrapper">
                      <span>
                        <i className="fa-solid fa-phone" />
                      </span>
                      <input
                        id="category"
                        name="category"
                        type="text"
                        defaultValue={product.category}
                        onChange={changeHandler}
                        onBlur={(e) => validator(e)}
                      />
                    </div>
                    {errors.category && (
                      <p className="form-error">Category is not valid!</p>
                    )}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="image">Product Image</label>
                    <div className="input-wrapper">
                      <span>
                        <i className="fa-solid fa-image" />
                      </span>
                      <input
                        id="image"
                        name="image"
                        type="text"
                        defaultValue={product.image}
                        onChange={changeHandler}
                        onBlur={(e) => validator(e)}
                      />
                    </div>
                    {errors.image && (
                      <p className="form-error">Product Image is not valid!</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="countInStock">Count In Stock</label>
                    <div className="input-wrapper">
                      <span>
                        <i className="fa-solid fa-user" />
                      </span>
                      <input
                        id="countInStock"
                        name="countInStock"
                        type="text"
                        defaultValue={product.countInStock}
                        onChange={changeHandler}
                        onBlur={(e) => validator(e)}
                      />
                    </div>
                    {errors.countInStock && (
                      <p className="form-error">
                        countInStock should be Positive number!
                      </p>
                    )}
                  </div>
                </div>
                <div className="form-group long-line">
                  <label htmlFor="description">Description</label>
                  <div className="input-wrapper">
                    <textarea
                      className="text-admin"
                      id="description"
                      name="description"
                      type="text"
                      defaultValue={product.description}
                      onChange={changeHandler}
                      onBlur={(e) => validator(e)}
                    />
                  </div>
                  {errors.description && (
                    <p className="form-error">description is not valid!</p>
                  )}
                </div>

                <div id="form-actions">
                  <button
                    id="action-save"
                    className="btn-admin"
                    type="submit"
                    disabled={!isFormValid}
                  >
                    Save
                  </button>
                  <button
                    id="action-cancel"
                    className="btn-admin"
                    type="button"
                    onClick={() => dispatch(closeModal())}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};
