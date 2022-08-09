import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <Helmet>
        <title>Footer</title>
      </Helmet>
      <p>2022 Sneakers All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
