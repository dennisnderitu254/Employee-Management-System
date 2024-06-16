// src/LandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="navbar-title">Employee Management System</div>
        <ul className="navbar-links">
          <li><Link to="#about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="#signup">Sign Up</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;
