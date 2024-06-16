//src/AboutPage.tsx

import React from 'react';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About Employee Management System</h1>
      <p>
        Welcome to the Employee Management System. This system helps manage the company's employees efficiently. 
        As a system administrator, you can assign users the manager role, and as a manager, you can oversee the employees assigned to you.
      </p>
    </div>
  );
};

export default AboutPage;