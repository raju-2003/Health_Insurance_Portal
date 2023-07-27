import React from 'react';
import SearchBar from '../Home/Searchbar';
import DashboardContent from './Dashboardcontent';
import Footer from '../Home/Footer';
import Dashboardnav from './Dashboardnav';
const Navbar = () => {
  return (
    <>
      <Dashboardnav />
      <SearchBar />
      <DashboardContent />
      <Footer />
    </>
  );
};

export default Navbar;
