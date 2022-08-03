import React from 'react';
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../404/PageNotFound.css';

export const PageNotFound = () => {
  return (
    <>
      <Card className="justify-content-center mt-5 color-body">
        <Helmet>
          <title>404</title>
        </Helmet>
        <div className="text-center">
          <h3 className="text-center text-grey">Ups. Something is wrong.</h3>
          <Card.Img
            style={{ height: '400px', width: '800px' }}
            variant="top"
            src="https://res.cloudinary.com/dmkgrwjes/image/upload/v1659285250/samples/ecommerce/1_EQisBuMOijQT8woW0Jn6pA_yz7n5r.jpg"
          />
        </div>
        <Card.Body>
          <div className="row">
            <div className="col-12 text-center pt-3">
              <h2 className="text-center text-grey">You can get back to our</h2>
              <Link className="mt-2 btn btn-primary text-uppercase" to={'/'}>
                Home Page
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
