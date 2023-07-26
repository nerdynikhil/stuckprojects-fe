// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to StuckProjects.com!</h1>
      <p>Are your projects stuck in the limbo of unfinished dreams? Fear not, fellow developers!</p>
      <p>StuckProjects.com is the quirky wonderland where you can share your incomplete projects with the world and find like-minded developers to get unstuck together.</p>
      <Link to="/submit" className="btn btn-primary">Share Your Stuck Project Now!</Link>
    </div>
  );
}
