// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css'; // Create a new header.css file for styling


const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/submit">Submit a Project</Link>
        {/* Add more navigation links */}
      </nav>
    </header>
  );
}

export default Header; 
