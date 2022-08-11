import React from 'react';
import RequireAuthorization from './components/AuthComponent/RequireAuthorization.js';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import './App.css';
import { AdminPanel } from './Admin/AdminPanel.js';
import { ContextProvider } from './Admin/contexts/ContextProvider.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <ContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<App />}></Route>
              <Route element={<RequireAuthorization />}>
                <Route path="/admin/*" element={<AdminPanel />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ContextProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
