// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage'; // Replace with your landing page component if different
import LoginPage from './LoginPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          {/* Define routes for admin, manager, and employee logins */}
          <Route path="/login/admin" render={() => <div>Admin Login Page</div>} />
          <Route path="/login/manager" render={() => <div>Manager Login Page</div>} />
          <Route path="/login/employee" render={() => <div>Employee Login Page</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
