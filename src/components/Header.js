// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/submit">Submit a Project</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
