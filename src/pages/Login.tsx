import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { LogoIcon } from '../assets/icons/logo.icon';
import LoginForm from '../components/LoginForm/LoginForm';
import PageLayout from '../layout/page.layout';
import { getUser } from '../store/slice/user.slice';

export default function Login() {
  const user = useSelector(getUser);

  if (user.token) {
    return <Navigate to="/" replace />;
  }
  return (
    <PageLayout>
      <Box sx={{ maxWidth: '636px' }}>
        <LogoIcon />
        <Typography variant="h2" mt={4} mb={4.5} sx={{ fontSize: '56px', letterSpacing: '-0.5px' }}>
          Welcome to the
          <br />
          Product Security Platform
        </Typography>
        <LoginForm />
      </Box>
    </PageLayout>
  );
}
