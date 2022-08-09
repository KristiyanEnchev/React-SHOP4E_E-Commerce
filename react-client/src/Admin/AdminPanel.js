import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/sideNav/sideNav.js';
import RequireAuthorization from '../components/AuthComponent/RequireAuthorization.js';
import { UsersTable } from './components/Users/UsersTable.js';
import { Toaster } from 'react-hot-toast';
import './Admin.css';

export const AdminPanel = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route element={<RequireAuthorization />}>
          <Route path="/users" element={<UsersTable />} />
          <Route path="/products" element={<UsersTable />} />
        </Route>
      </Routes>
    </div>
  );
};
