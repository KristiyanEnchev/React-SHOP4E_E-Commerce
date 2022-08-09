import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  avatarValidator,
  emailValidator,
  firstNameValidator,
  lastNameValidator,
  nameValidator,
} from '../../../../components/Authentication/Validators.js';
import { Loader } from '../../../../components/common/Loader/Loader.js';
import { findUserById, setUser } from '../../../../redux/Admin/UserSlice.js';
import { updateUser } from '../../../../redux/Admin/UsersSlice.js';
import { closeModal } from '../../../../redux/Public/modalSlice.js';
import { UserActions } from '../Helpers/UserListConstants.js';

export const EditUser = ({ userId }) => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(findUserById(userId));
  }, [userId, dispatch]);

  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    dispatch(
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { avatar, firstName, lastName, ...userData } = user;
    userData.profile = { avatar, firstName, lastName };
    userData._id = user._id;
    dispatch(updateUser(userData));
    dispatch(closeModal({ action: UserActions.Close }));
  };

  const validator = (e) => {
    setErrors((state) =>
      e.target.name === 'email'
        ? { ...state, [e.target.name]: emailValidator(user.email) }
        : e.target.name === 'firstName'
        ? {
            ...state,
            [e.target.name]: firstNameValidator(user.firstName),
          }
        : e.target.name === 'name'
        ? { ...state, [e.target.name]: nameValidator(user.name) }
        : e.target.name === 'lastName'
        ? {
            ...state,
            [e.target.name]: lastNameValidator(user.lastName),
          }
        : { ...state, [e.target.name]: avatarValidator(user.avatar) }
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
                <h2>Edit User</h2>
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
                        defaultValue={user.firstName}
                        onChange={(e) => changeHandler(e)}
                        onBlur={(e) => validator(e)}
                      />
                    </div>
                    {errors.firstName && (
                      <p className="form-error">{errors.firstName}</p>
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
                        defaultValue={user.lastName}
                        onChange={(e) => changeHandler(e)}
                        onBlur={(e) => validator(e)}
                      />
                    </div>
                    {errors.lastName && (
                      <p className="form-error">{errors.lastName}</p>
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
                        defaultValue={user.email}
                        onChange={(e) => changeHandler(e)}
                        onBlur={(e) => validator(e)}
                      />
                    </div>
                    {errors.email && (
                      <p className="form-error">{errors.email}</p>
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
                        defaultValue={user.name}
                        onChange={(e) => changeHandler(e)}
                        onBlur={(e) => validator(e)}
                      />
                    </div>
                    {errors.name && <p className="form-error">{errors.name}</p>}
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
                      defaultValue={user.avatar}
                      onChange={(e) => changeHandler(e)}
                      onBlur={(e) => validator(e)}
                    />
                  </div>
                  {errors.avatar && (
                    <p className="form-error">{errors.avatar}</p>
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
