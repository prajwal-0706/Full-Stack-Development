import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/products" className="link">
          <span className="logo">Ticket Booking App</span>
        </Link>
        <Link to="/admin" className="link">
          <span className="logo">Admin SignUp</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
