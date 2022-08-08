import RequireAuth from './components/AuthComponent/RequireAuth.js';
import RequireAuthorization from './components/AuthComponent/RequireAuthorization.js';
import Logout from './components/Authentication/Logout.js';
import Layout from './components/common/Layout/Layout.js';
import { Routes, Route } from 'react-router-dom';
import { Register } from './components/Authentication/Register.js';
import { Login } from './components/Authentication/Login.js';
import { Toaster } from 'react-hot-toast';
import { PageNotFound } from './components/common/404/PageNotFound.js';
import AdminPannel from './Admin/AdminPannel.js';
import Navigation from './components/common/Nav/Navigation.js';
import Guest from './components/AuthComponent/Guest.js';
import Scroll from './components/common/scrollTop/scrollTop.js';
import Footer from './components/common/Layout/Footer.js';
import Product from './components/Product/Product.js';
import { Profile } from './components/Profile/Profile.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navigation />
      <Routes>
        <Route element={<Guest />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* public routes */}
        <Route path="/" element={<Layout />}>
          {/* protected routes */}
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="/logout" exact element={<Logout />} />
          <Route path="/profile" exact element={<Profile />} />
        </Route>
        {/* Admin Routes */}
        <Route element={<RequireAuthorization />}>
          {/* <Route path="/admin/*" element={<AdminPannel />} /> */}
        </Route>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/product/:slug" element={<Product />} />
      </Routes>
      <Scroll showBelow={250} />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
