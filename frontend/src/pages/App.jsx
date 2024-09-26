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
import Profile from "./Profile";



const PrivateRoutes = () => {
  const token = (localStorage.getItem('token')) || false;
  return token ? <Outlet /> : <Navigate to="/login" />;
}


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );

}

export default App