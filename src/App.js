import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProjectList from './pages/ProjectList';
import SubmitProject from './pages/SubmitProject';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/projects" component={ProjectList} />
        <Route exact path="/submit" component={SubmitProject} />
        {/* Add more routes for other pages */}
      </Switch>
    </Router>
  );
}
