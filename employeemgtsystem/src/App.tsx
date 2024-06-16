// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/admin" element={<div>Admin Login Page</div>} />
          <Route path="/login/manager" element={<div>Manager Login Page</div>} />
          <Route path="/login/employee" element={<div>Employee Login Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;