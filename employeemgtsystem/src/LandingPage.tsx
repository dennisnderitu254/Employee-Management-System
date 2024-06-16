// src/LandingPage.tsx
import React from 'react';
import Navbar from './Navbar';
// import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar />
    </div>
  );
};


export default LandingPage;
