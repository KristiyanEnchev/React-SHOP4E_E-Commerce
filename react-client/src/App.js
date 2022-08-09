import RequireAuth from './components/AuthComponent/RequireAuth.js';
import { Routes, Route } from 'react-router-dom';
import { Register } from './components/Authentication/Register.js';
import { Login } from './components/Authentication/Login.js';
import Logout from './components/Authentication/Logout.js';
import { Toaster } from 'react-hot-toast';
import { PageNotFound } from './components/common/404/PageNotFound.js';
import Navigation from './components/common/Nav/Navigation.js';
import Guest from './components/AuthComponent/Guest.js';
import Scroll from './components/common/scrollTop/scrollTop.js';
import Footer from './components/common/Footer/Footer.js';
import Product from './components/Product/Product.js';
import { Profile } from './components/Profile/Profile.js';
import Home from './components/common/Layout/Home.js';

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navigation />
      <Routes>
        {/* Public */}
        <Route element={<Guest />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* Main */}
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<Product />} />

        {/* Auth */}
        <Route element={<RequireAuth />}>
          <Route path="/logout" exact element={<Logout />} />
          <Route path="/profile" exact element={<Profile />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Scroll showBelow={250} />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
