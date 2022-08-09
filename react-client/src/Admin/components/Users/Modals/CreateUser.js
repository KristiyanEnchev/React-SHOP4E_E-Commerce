import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../../../redux/Admin/UsersSlice.js';
import { closeModal } from '../../../../redux/Public/modalSlice.js';
import { UserActions } from '../Helpers/UserListConstants.js';

export const CreateUser = () => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({ initialError: 'Form is Empty' });
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    name: '',
    avatar: '',
    password: '',
  });

  const changeHandler = (e) => {
    if (
      values.avatar !== '' &&
      values.firstName !== '' &&
      values.lastName !== '' &&
      values.email !== '' &&
      values.name !== '' &&
      values.password !== ''
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

    const { avatar, firstName, lastName, ...userData } = values;
    userData.profile = { avatar, firstName, lastName };
    dispatch(createUser(userData));
    dispatch(closeModal({ action: UserActions.Close }));
  };

  const minLength = (e, bound) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: values[e.target.name].length < bound,
    }));
  };

  const isFormValid = !Object.values(errors).some((x) => x);

  return (
    <div className="overlay">
      <div className="backdrop" onClick={() => dispatch(closeModal())} />
      <div className="modal">
        <div className="user-container">
          <header className="headers">
            <h2>Create User</h2>
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
                <label htmlFor="firstName">First name</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-user" />
                  </span>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={values.firstName}
                    onChange={changeHandler}
                    onBlur={(e) => minLength(e, 3)}
                  />
                </div>
                {errors.firstName && (
                  <p className="form-error">
                    First name should be at least 3 characters long!
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-user" />
                  </span>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={values.lastName}
                    onChange={changeHandler}
                    onBlur={(e) => minLength(e, 3)}
                  />
                </div>
                {errors.lastName && (
                  <p className="form-error">
                    Last name should be at least 3 characters long!
                  </p>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-envelope" />
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={values.email}
                    onChange={changeHandler}
                    onBlur={(e) => minLength(e, 5)}
                  />
                </div>
                {errors.email && (
                  <p className="form-error">Email is not valid!</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-phone" />
                  </span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={changeHandler}
                    onBlur={(e) => minLength(e, 6)}
                  />
                </div>
                {errors.name && (
                  <p className="form-error">Name is not valid!</p>
                )}
              </div>
            </div>
            <div className="form-group long-line">
              <label htmlFor="avatar">Avatar</label>
              <div className="input-wrapper">
                <span>
                  <i className="fa-solid fa-image" />
                </span>
                <input
                  id="avatar"
                  name="avatar"
                  type="text"
                  value={values.avatar}
                  onChange={changeHandler}
                  onBlur={(e) => minLength(e, 3)}
                />
              </div>
              {errors.avatar && (
                <p className="form-error">Image Avatar is not valid!</p>
              )}
            </div>
            <div className="form-group long-line">
              <label htmlFor="Password">Password</label>
              <div className="input-wrapper">
                <span>
                  <i className="fa-solid fa-image" />
                </span>
                <input
                  id="password"
                  name="password"
                  type="text"
                  value={values.password}
                  onChange={changeHandler}
                  onBlur={(e) => minLength(e, 8)}
                />
              </div>
              {errors.password && (
                <p className="form-error">Password is not valid!</p>
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
