import { Container, useMediaQuery } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import ContactUs from '../pages/ContactUs';
import ForgotPassword from '../pages/ForgotPassword';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Terms from '../pages/Terms';

import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import bg from '../assets/images/login-bg.png';
import { setUser } from '../store/slice/user.slice';

function App() {
  const dispatch = useDispatch();
  const isMedium = useMediaQuery('(max-width:900px)');

  useEffect(() => {
    const lsToken = localStorage.getItem('token');
    const lsUser = localStorage.getItem('user');
    if (lsToken && lsUser) {
      dispatch(setUser({ user: JSON.parse(lsUser), accessToken: lsToken }));
    }
  }, [dispatch]);

  const bgImage = useMemo(() => {
    return isMedium
      ? {}
      : {
          backgroundImage: `url(${bg})`,
          backgroundSize: '62%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
        };
  }, [isMedium]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        px: 2,
        py: 5,
        ...bgImage,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="terms" element={<Terms />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
