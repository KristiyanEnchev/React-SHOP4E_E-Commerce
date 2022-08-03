import { useLocation, Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  const token = sessionStorage.getItem('token');
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default RequireAuth;
