import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button } from '../app/app.styled';
import PageTitle from '../components/PageTitle/PageTitle';
import PageLayout from '../layout/page.layout';
import { logoutUser } from '../store/slice/user.slice';

export default function Home() {
  const distpatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    distpatch(logoutUser());
    navigate('/login', { replace: true });
  };
  return (
    <PageLayout>
      <Box>
        <PageTitle>
          Welcome to the
          <br />
          Homepage
        </PageTitle>

        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </PageLayout>
  );
}
