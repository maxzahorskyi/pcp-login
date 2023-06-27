import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Snackbar } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button } from '../app/app.styled';
import PageTitle from '../components/PageTitle/PageTitle';
import PageLayout from '../layout/page.layout';
import { useGetNotificationQuery } from '../store/api/notification.api';
import { getUser, logoutUser } from '../store/slice/user.slice';

export default function Home() {
  const distpatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(getUser);

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const { data: notification } = useGetNotificationQuery({ id: user.userId });

  const handleClose = () => setIsOpen(false);

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
        <Snackbar
          sx={{ height: '100%' }}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={isOpen}
          onClose={handleClose}
          message={`${notification?.title}! ${notification?.description}`}
          action={
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </Box>
    </PageLayout>
  );
}
