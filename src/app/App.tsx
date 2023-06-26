import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import ContactUs from '../pages/ContactUs';
import ForgotPassword from '../pages/ForgotPassword';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Terms from '../pages/Terms';

function App() {
  return (
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
  );
}

export default App;
