import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import Button from './Button.js';
import { useStateContext } from '../contexts/ContextProvider.js';
import { Link } from 'react-router-dom';

const UserProfile = ({ user }) => {
  const { currentColor } = useStateContext();
  const { avatar, name, email } = user;

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgColor={currentColor}
          size="2xl"
          borderRadius="5rem"
          clas="btn-style-t"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> {name} </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {' '}
            Administrator{' '}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {' '}
            {email}{' '}
          </p>
        </div>
      </div>
      <div className="mt-5">
        <Link to={'/logout'}>
          <Button
            color="white"
            bgColor={currentColor}
            text="Logout"
            borderRadius="10px"
            width="full"
            clas="btn-nb"
          />
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
