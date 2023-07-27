import React, { useState } from 'react';
import { FaBars, FaListAlt,  FaFileSignature } from 'react-icons/fa';
import { BsClockHistory, BsFileCheck, BsFileText } from 'react-icons/bs';
import { AiOutlineCheckCircle, AiOutlineArrowUp, AiOutlineCreditCard,  AiOutlineLogout } from 'react-icons/ai';
import './Companynav.css';

const Companynav = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
        <nav className="dash-navbar">
        <div className="dash-left-section">
          <div className="dash-sidebar-toggle" onClick={handleToggleSidebar}>
            <FaBars />
          </div>
          <span className="dashboard-label">Dashboard</span>
        </div>
        <div className="dash-right-section">
          <ul className="dash-nav-menu">
            <li className="dash-nav-item">
              <a href="/history" className="dash-nav-link">History</a>
              <ul className="dash-sub-menu">
                <li>
                  <a href="/paymenthistory">
                    <BsClockHistory /> Payment History
                  </a>
                </li>
                <li>
                  <a href="/claimhistory">
                    <BsFileCheck /> Claim History
                  </a>
                </li>
                <li>
                  <a href="/policyhistory">
                    <BsFileText /> Policy History
                  </a>
                </li>
              </ul>
            </li>
            <li className="dash-nav-item">
              <a href="/claim" className="dash-nav-link">Claim</a>

              <ul className="dash-sub-menu">
                <li>
                  <a href="/trackclaim">
                    <AiOutlineCheckCircle /> Track Claim
                  </a>
                </li>
                <li>
                  <a href="/raiseclaim">
                    <AiOutlineArrowUp /> Raise Claim
                  </a>
                </li>
              </ul>
            </li>
            <li className="dash-nav-item">
              <a href="/payment" className="dash-nav-link">Payment</a>
              <ul className="dash-sub-menu">
                <li>
                  <a href="/paypremium">
                    <AiOutlineCreditCard /> Pay Premium
                  </a>
                </li>
              </ul>
            </li>
            <li className="dash-nav-item">
              <a href="/profile" className="dash-nav-link">Profile</a>
              <ul className="dash-sub-menu">
                <li>
                  <a href="/login">
                    <AiOutlineLogout /> Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>

        </div>
        {isSidebarOpen && (
          <div className="sidebar">
            <ul>
              <li>
                <a href="viewpolicy">
                  <FaListAlt />
                  <span className='sidebar-text'>Manage Policy</span>
                </a>
              </li>
              <li>
                <a href="managepolicy">
                  <FaFileSignature />
                  <span className='sidebar-text'>Manage Client</span>
                </a>
              </li>
              <li>
                <a href="managepolicy">
                  <FaFileSignature />
                  <span className='sidebar-text'>Manage Claim</span>
                </a>
              </li>
              <li>
                <a href="managepolicy">
                  <FaFileSignature />
                  <span className='sidebar-text'>Manage Payment</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>

    );
};

export default Companynav;