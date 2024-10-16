import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import { Navigate, Outlet } from 'react-router-dom';
import React from "react";
import Navbar from './Navbar';
import Profile from "./Profile";
import PostDetails from "./PostDetails";
import axios from 'axios';
import '../App.css';

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
            <Route path="/posts/:id" element={<PostDetails />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path=":handle" element={<PostDetails />} />
        </Routes>
      </Router>
    </>
  );
  
}

export default App