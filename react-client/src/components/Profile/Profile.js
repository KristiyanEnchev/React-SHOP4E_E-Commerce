import React from 'react';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

export const Profile = () => {
  const blankPictueUrl =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png';

  const { avatar, email, name } = useSelector((state) => state.auth);

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
        <form className="form">
          <div className="image-container">
            {avatar ? (
              <img src={avatar} alt="" className="image-profile" />
            ) : (
              <img src={blankPictueUrl} alt="" className="image-profile" />
            )}
          </div>
          <Form.Group className="mb-3 form-label-r" controlId="name">
            <Form.Label>Name: </Form.Label>
            <Form.Control
              className="form-content"
              defaultValue={name}
              required
            />
            <div className="form-border"></div>
          </Form.Group>
          <Form.Group className="mb-3 form-label-r" controlId="name">
            <Form.Label>Email: </Form.Label>
            <Form.Control
              className="form-content"
              type="email"
              defaultValue={email}
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
            <Button id="submit-btn" type="submit">
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
