// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import ManagerLoginPage from './ManagerLoginPage';
import AboutPage from './AboutPage';
import AdminLoginPage from './AdminLoginPage';
import SignUpPage from './SignUpPage';
import EmployeeLoginPage from './EmployeeLoginPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login/admin" element={<AdminLoginPage />} />
          <Route path="/login/manager" element={<ManagerLoginPage />} />
          <Route path="/login/employee" element={<EmployeeLoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;