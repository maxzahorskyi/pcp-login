import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
