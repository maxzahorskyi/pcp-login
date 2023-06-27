import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getUser } from '../../store/slice/user.slice';

type Props = {
  children?: JSX.Element;
};

export const PrivateRoute = ({ children }: Props) => {
  const user = useSelector(getUser);

  if (!user.token) {
    return <Navigate to="/login" replace />;
  }

  return children || <Outlet />;
};
