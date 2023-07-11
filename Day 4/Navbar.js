import React from 'react';
import { FaHome } from 'react-icons/fa';
import './Navbar.css';
import SearchBar from './Searchbar';
import Home from '../Home/Home';
import Footer from '../Home/Footer';
const Navbar = () => {

  


  return (
    <>
      <h1 className="title">Azzure Health Insurance Portal</h1>
      <nav className="navbar">
        <div className="left-section">
          <a href="/" className="logo">
            <FaHome className="home-icon"/>
            Home
          </a>
        </div>
        <div className="right-section">
          <a href="/profile">Profile</a>
          <a href="/signup">Signup</a>
          <a href="/login">Login</a>
        </div>
      </nav>
      <div className="search-section">

        <SearchBar />
        <Home /> 
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
