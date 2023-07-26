// Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav className="navbar">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
          Projects
        </Link>
        <Link to="/submit" className={location.pathname === '/submit' ? 'active' : ''}>
          Submit a Project
        </Link>
      </nav>
    </header>
  );
};

export default Header;
