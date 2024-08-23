// import logo from '..assets/logo.svg'
// import './styles.App.css';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import { Navigate, Outlet } from 'react-router-dom';
import React from "react";
import Navbar from './Navbar';


const PrivateRoutes = () => {
  const auth = JSON.parse(localStorage.getItem('auth')) || '{"token": false}';
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}
// TODO Add a nav bar
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );

}

export default App