// src/LandingPage.tsx
import React from 'react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="navbar-title">Employee Management System</div>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="#signup">Sign Up</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;
