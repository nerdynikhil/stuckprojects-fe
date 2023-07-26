// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import SubmitProject from './pages/SubmitProject'; // Update the import statement

import './css/App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        {/* Vertical Navbar */}
        <Header />

        {/* Main Content */}
        <main className="main-content">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/submit" component={SubmitProject} /> {/* Use SubmitProject component */}
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
