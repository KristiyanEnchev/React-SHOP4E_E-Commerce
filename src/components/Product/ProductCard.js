import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  const { image, name, slug, price } = product;
  return (
    <div>
      <Link to={`/product/${slug}`}>
        <div className="product-card">
          <img
            src={image}
            width={250}
            height={250}
            alt={name}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};
