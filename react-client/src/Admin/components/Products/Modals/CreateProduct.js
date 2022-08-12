import React, { useState } from 'react';
import { AiOutlineShoppingCart, AiFillDollarCircle } from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import { TbShoppingCartDiscount } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../../redux/Public/modalSlice.js';
import { createProduct } from '../../../../redux/Public/productsSlice.js';
import { UserActions } from '../../Helpers/UserListConstants.js';

export const CreateProduct = () => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({ initialError: 'Form is Empty' });
  const [values, setValues] = useState({
    name: '',
    slug: '',
    image: '',
    images: '',
    category: '',
    description: '',
    price: '',
    countInStock: '',
  });

  const changeHandler = (e) => {
    if (
      values.name !== '' &&
      values.slug !== '' &&
      values.image !== '' &&
      values.images !== '' &&
      values.category !== '' &&
      values.description !== '' &&
      values.price !== '' &&
      values.countInStock !== ''
    ) {
      setErrors({ initialError: '' });
    }
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const { ...newProduct } = values;

    dispatch(createProduct(newProduct));
    dispatch(closeModal({ action: UserActions.Close }));
  };

  const minLength = (e, bound) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: values[e.target.name].length < bound,
    }));
  };

  const isPositive = (e) => {
    let number = Number(e.target.value);

    setErrors((state) => ({
      ...state,
      [e.target.name]: number < 0,
      [e.target.name]: values[e.target.name].length < 1,
    }));
  };

  const isFormValid = !Object.values(errors).some((x) => x);

  return (
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
                    value={values.name}
                    onChange={changeHandler}
                    onBlur={(e) => minLength(e, 3)}
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
                    <AiFillDollarCircle />
                  </span>
                  <input
                    id="price"
                    name="price"
                    type="text"
                    value={values.price}
                    onChange={changeHandler}
                    onBlur={(e) => isPositive(e)}
                  />
                </div>
                {errors.price && (
                  <p className="form-error">Price should be Positive number!</p>
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
                    value={values.slug}
                    onChange={changeHandler}
                    onBlur={(e) => minLength(e, 2)}
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
                    <BiCategoryAlt />
                  </span>
                  <input
                    id="category"
                    name="category"
                    type="text"
                    value={values.category}
                    onChange={changeHandler}
                    onBlur={(e) => minLength(e, 3)}
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
                    value={values.image}
                    onChange={changeHandler}
                    onBlur={(e) => minLength(e, 3)}
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
                    <TbShoppingCartDiscount />
                  </span>
                  <input
                    id="countInStock"
                    name="countInStock"
                    type="text"
                    value={values.countInStock}
                    onChange={changeHandler}
                    onBlur={(e) => isPositive(e)}
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
                  value={values.description}
                  onChange={changeHandler}
                  onBlur={(e) => minLength(e, 10)}
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
  );
};
