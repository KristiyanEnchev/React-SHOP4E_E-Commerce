import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../redux/AuthSlice.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/AuthSlice.js';
import * as userService from '../../Services/UserService.js';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const RequireAuth = () => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function logout() {
      await userService.logout();
      dispatch(logOut());
      navigate('/login');
      toast.success('Successful logut');
    }
    logout();
  }, [navigate, token, dispatch]);

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default RequireAuth;
