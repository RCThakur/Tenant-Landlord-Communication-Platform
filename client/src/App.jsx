import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home'; // Your protected page
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';


const App = () => (
  <>
  <Navbar />
  <Routes>
    
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
    />
  </Routes>
  </>
);

export default App;
