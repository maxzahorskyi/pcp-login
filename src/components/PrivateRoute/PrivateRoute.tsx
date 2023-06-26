import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  children?: JSX.Element;
};

export const PrivateRoute = ({ children }: Props) => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children || <Outlet />;
};
