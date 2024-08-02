// import logo from '..assets/logo.svg'
// import './styles.App.css';
import { Browser as Router } from 'react-route-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './SignUp';
import Login from './Login';


const PrivateRoutes = () => {
  const auth = JSON.parse(localStorage.getItem('auth')) || '("token": false)' || '("token": false)'

  return auth.token ? <Outlet /> : <Navigate to="/.Login" />;
}
  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App