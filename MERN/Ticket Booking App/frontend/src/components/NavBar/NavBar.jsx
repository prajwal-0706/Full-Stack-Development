import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { AdminLogin } from '../../api';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__left-logo">
          <h1>L</h1>
        </div>
        <div className="navbar__left-content">
          <ul>
            <li>
              <Link to="/home">Latest</Link>
            </li>
            <li>
              <Link to="/home"></Link>
            </li>
            <li>
              <Link to="/home">View</Link>
            </li>
            <li onClick={AdminLogin}>
              <Link>Account</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
