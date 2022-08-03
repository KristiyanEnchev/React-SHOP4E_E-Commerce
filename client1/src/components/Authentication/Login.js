import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/AuthSlice.js';
import { getError } from '../../ustils.js';
import { emailValidator, passwordValidator } from './Validators.js';

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
      dispatch(userLogin({ email, password }));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
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
    <Container className="small-container login-container">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="row justify-content-center local-bootstrap">
        <div className="col-md-6 col-sm-8 mt-5">
          <Card className="m-3 p-5">
            <h1 className="my-3">Login</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  onChange={handleUserInput}
                  onBlur={(e) => validator(e)}
                />
                {validation.email && (
                  <p className="form-error">{validation.email}</p>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  required
                  onChange={handlePwdInput}
                  onBlur={(e) => validator(e)}
                />
                {validation.password && (
                  <p className="form-error">{validation.password}</p>
                )}
              </Form.Group>
              <div className="mb-3">
                <Button
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
  );
};
