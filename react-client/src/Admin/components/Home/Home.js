import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider.js';

export const Home = () => {
  const { currentColor } = useStateContext();

  return (
    <div className=" mb-2">
      <div className="image_wrapper">
        <p
          style={{ color: currentColor }}
          className="text-3xl font-extrabold tracking-tight text-slate-900 text-center"
        >
          Wellcome to The Admin Pannel
        </p>{' '}
        <img
          className="image_admin_guard"
          src="https://res.cloudinary.com/dmkgrwjes/image/upload/v1660328454/samples/New%20Assets/guard_idy7yg.png"
          alt="guard"
        />
      </div>
    </div>
  );
};
