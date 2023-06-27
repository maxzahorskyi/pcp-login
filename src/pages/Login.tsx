import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import LoginForm from '../components/LoginForm/LoginForm';
import PageTitle from '../components/PageTitle/PageTitle';
import PageLayout from '../layout/page.layout';
import { getUser } from '../store/slice/user.slice';

export default function Login() {
  const user = useSelector(getUser);
  const isLarge = useMediaQuery('(max-width: 1400px) and (min-width: 901px)');

  if (user.token) {
    return <Navigate to="/" replace />;
  }
  return (
    <PageLayout>
      <Box sx={{ maxWidth: isLarge ? '500px' : '636px' }}>
        <PageTitle>
          Welcome to the
          <br />
          Product Security Platform
        </PageTitle>

        <LoginForm />
      </Box>
    </PageLayout>
  );
}
