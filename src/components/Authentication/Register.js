import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { register } from '../../Services/UserService';
import { getError } from '../../ustils.js';
import {
  confirmPasswordValidator,
  emailValidator,
  nameValidator,
  passwordValidator,
} from './Validators.js';

export const Register = () => {
  window.alert = function () {};
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  const [validation, setVAlidation] = useState({});

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validator = (e) => {
    setVAlidation((state) =>
      e.target.name === 'email'
        ? { ...state, [e.target.name]: emailValidator(email) }
        : e.target.name === 'password'
        ? { ...state, [e.target.name]: passwordValidator(password) }
        : e.target.name === 'name'
        ? { ...state, [e.target.name]: nameValidator(name) }
        : {
            ...state,
            [e.target.name]: confirmPasswordValidator(
              confirmPassword,
              password
            ),
          }
    );
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      register(email, name, password);
      navigate(redirect || '/login');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const isFormValid = !Object.values(validation).some((x) => x);

  return (
    <Container className="small-container register-container">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="row justify-content-center">
        <div className="col-md-12 col-sm-8 col-lg-6 mt-2">
          <Card className="m-4 p-4">
            <h1 className="my-3">Register</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  onBlur={(e) => validator(e)}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              {validation.name && (
                <p className="form-error">{validation.name}</p>
              )}

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={(e) => validator(e)}
                />
                {validation.password && (
                  <p className="form-error">{validation.password}</p>
                )}
                <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    onBlur={(e) => validator(e)}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  {validation.confirmPassword && (
                    <p className="form-error">{validation.confirmPassword}</p>
                  )}
                </Form.Group>
              </Form.Group>
              <div className="mb-3">
                <Button disabled={!isFormValid} type="submit">
                  Register
                </Button>
              </div>
              <div className="mb-3">
                Already have an account?{' '}
                <Link
                  style={{ textDecoration: 'none', color: 'blue' }}
                  to={`/login?redirect=${redirect}`}
                >
                  Login
                </Link>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </Container>
  );
};
