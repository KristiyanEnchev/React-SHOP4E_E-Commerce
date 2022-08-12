import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/Public/AuthSlice.js';
import { updateUser } from '../../redux/Admin/UsersSlice.js';
import {
  avatarValidator,
  emailValidator,
  firstNameValidator,
  lastNameValidator,
  nameValidator,
} from '../Authentication/Validators.js';
import { useLocation, useNavigate } from 'react-router-dom';

export const Profile = () => {
  const blankPictueUrl =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const user = useSelector((state) => state.auth);
  const { avatar, email, name } = user;
  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    dispatch(
      setCredentials({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { avatar, ...userData } = user;
    userData.profile = { avatar };
    console.log(userData);
    dispatch(updateUser(userData));
    navigate(redirect || '/');
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

  return (
    <div className="container small-container mt-5" id="card">
      <Helmet>
        <title>User Profile</title>
      </Helmet>
      <div id="card-content">
        <h1 id="card-title" className="my-3">
          User Profile
        </h1>
        <div className="underline-title"></div>
        <form onSubmit={submitHandler} className="form">
          <div className="image-container">
            {avatar ? (
              <img src={avatar} alt="userImage" className="image-profile" />
            ) : (
              <img
                src={blankPictueUrl}
                alt="blankImage"
                className="image-profile"
              />
            )}
          </div>
          <Form.Group className="mb-3 form-label-r" controlId="name">
            <Form.Label>Name: </Form.Label>
            <Form.Control
              className="form-content"
              name="name"
              defaultValue={name}
              onChange={(e) => changeHandler(e)}
              onBlur={(e) => validator(e)}
              required
            />
            <div className="form-border"></div>
          </Form.Group>
          <Form.Group className="mb-3 form-label-r" controlId="name">
            <Form.Label>Email: </Form.Label>
            <Form.Control
              className="form-content"
              type="email"
              name="email"
              defaultValue={email}
              onChange={(e) => changeHandler(e)}
              onBlur={(e) => validator(e)}
              required
            />
            <div className="form-border"></div>
          </Form.Group>
          {/* <Form.Group className="mb-3 form-label-r" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="form-content"
              type="password"
              onChange={''}
            />
            <div className="form-border"></div>
          </Form.Group> */}

          <div className="mb-3">
            <Button disabled={!isFormValid} id="submit-btn" type="submit">
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
