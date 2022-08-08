import React from 'react';
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../404/PageNotFound.css';

export const PageNotFound = () => {
  return (
    <>
      <Card id="card-404" className="justify-content-center mt-5 color-body">
        <Helmet>
          <title>404</title>
        </Helmet>
        <div className="text-404">
          <h3 className="text-404 text-grey">Ups. Something is wrong.</h3>
          <Card.Img
            className="img-404"
            style={{ height: '400px', width: '800px' }}
            variant="top"
            src="https://res.cloudinary.com/dmkgrwjes/image/upload/v1659285250/samples/ecommerce/1_EQisBuMOijQT8woW0Jn6pA_yz7n5r.jpg"
          />
          <div>
            <h2 className="text-404 text-grey">You can get back to our</h2>
            <button className="mt-5 btn btn-primary btn-404 text-uppercase">
              <Link
                className="mt-5 btn btn-primary btn-404 text-uppercase"
                to={'/'}
              >
                Home Page
              </Link>
            </button>
          </div>
        </div>
      </Card>
    </>
  );
};
