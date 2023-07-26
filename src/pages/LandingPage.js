// LandingPage.js
import React from 'react';
import '../css/landing-page.css'; // Import the landing-page.css file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Welcome to StuckProjects!</h1>
        <p>
          Are you stuck with a coding project and need some help to get it
          moving? Or do you have skills and want to collaborate with others?
          StuckProjects is the perfect platform for you!
        </p>
      </div>
      <div className="image-container">
        <img
          src="/undraw_programming_re_kg9v.svg"
          alt="Programming Illustration"
          className="programming-image"
        />
      </div>
    </div>
  );
};

export default LandingPage;
