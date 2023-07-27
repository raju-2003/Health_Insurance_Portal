import React from 'react';
import { FaHome } from 'react-icons/fa';
import './Navbar.css';
const Navbar = () => {
  return (
    <>
      <h1 className="title">Assure Health Insurance Portal</h1>
      <nav className="navbar">
        <div className="left-section">
          <a href="/" className="logo">
            <FaHome className="home-icon"/>
            Home
          </a>
        </div>
        <div className="right-section">
          <a href="/signup">Signup</a>
          <a href="/login">Login</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
