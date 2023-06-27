import { Box, Typography } from '@mui/material';
import { LogoIcon } from '../assets/icons/logo.icon';
import LoginForm from '../components/LoginForm/LoginForm';
import PageLayout from '../layout/page.layout';

export default function Login() {
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
