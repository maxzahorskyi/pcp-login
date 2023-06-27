import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import ContactUs from '../pages/ContactUs';
import ForgotPassword from '../pages/ForgotPassword';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Terms from '../pages/Terms';

import bg from '../assets/images/login-bg.png';

function App() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        px: 2,
        py: 5,
        backgroundImage: `url(${bg})`,
        backgroundSize: '62%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
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
