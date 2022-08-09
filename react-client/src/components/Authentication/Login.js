import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/Public/AuthSlice.js';
import { emailValidator, passwordValidator } from './Validators.js';

import './Authentication.css';

export const Login = () => {
  window.alert = function () {};
  const [validation, setVAlidation] = useState({});
  const navigate = useNavigate();
  const { search } = useLocation();
  const dispatch = useDispatch();

  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(userLogin({ email, password }));
      navigate(redirect || '/');
      toast.success('Successful Login');
    } catch (err) {
      // toast.error(getError(err));
    }
  };

  const validator = (e) => {
    setVAlidation((state) =>
      e.target.name === 'email'
        ? { ...state, [e.target.name]: emailValidator(email) }
        : { ...state, [e.target.name]: passwordValidator(password) }
    );
  };

  const handleUserInput = (e) => setEmail(e.target.value);

  const handlePwdInput = (e) => setPassword(e.target.value);

  const isFormValid = !Object.values(validation).some((x) => x);

  return (
    <div id="card">
      <Container className="small-container login-container">
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div
          className="row justify-content-center local-bootstrap"
          id="card-content"
        >
          <div className="col-md-6 col-sm-8 mt-5">
            <Card className="m-3 p-5">
              <h1 className="my-3" id="card-title">
                Login
              </h1>
              <div className="underline-title"></div>
              <Form onSubmit={submitHandler} className="form">
                <Form.Group className="mb-3 form-label" controlId="email">
                  <Form.Label>Email : </Form.Label>
                  <Form.Control
                    className="form-content"
                    type="email"
                    name="email"
                    required
                    onChange={handleUserInput}
                    onBlur={(e) => validator(e)}
                  />
                  <div className="form-border"></div>
                  {validation.email && (
                    <p id="signup" className="form-error">
                      {validation.email}
                    </p>
                  )}
                </Form.Group>
                <Form.Group className="mb-3 form-label" controlId="password">
                  <Form.Label className="form-label">Password : </Form.Label>
                  <Form.Control
                    className="form-content"
                    type="password"
                    name="password"
                    required
                    onChange={handlePwdInput}
                    onBlur={(e) => validator(e)}
                  />
                  <div className="form-border"></div>
                  {validation.password && (
                    <p id="signup" className="form-error">
                      {validation.password}
                    </p>
                  )}
                </Form.Group>
                <div className="mb-3">
                  <Button
                    id="submit-btn"
                    disabled={!isFormValid}
                    className="button"
                    type="submit"
                  >
                    Login
                  </Button>
                </div>
                <div className="mb-3">
                  New customer?{' '}
                  <Link
                    id="signup"
                    style={{ textDecoration: 'none', color: 'blue' }}
                    to={`/register?redirect=${redirect}`}
                  >
                    Create your account
                  </Link>
                </div>
              </Form>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};
