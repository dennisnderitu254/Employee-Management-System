// src/LoginPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <Navbar />
      <h2>Login Page</h2>
      <div className="login-buttons-container">
        <Link to="/login/admin">
          <button className="btn">Login as Admin</button>
        </Link>
        <Link to="/login/manager">
          <button className="btn">Login as Manager</button>
        </Link>
        <Link to="/login/employee">
          <button className="btn">Login as Employee</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
