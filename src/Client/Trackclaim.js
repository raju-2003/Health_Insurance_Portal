import React, { useState } from 'react';
import './Trackclaim.css';
import Dashboardnav from './Dashboardnav';
import Footer from '../Home/Footer';

const ClaimTrackStatus = () => {
  const [claimNumber, setClaimNumber] = useState('');
  const [claimStatus, setClaimStatus] = useState(null);

  const claims = [
    { claimNumber: 'CLM001', status: 'In Progress', completionDate: '15th October 2023' },
    { claimNumber: 'CLM002', status: 'Approved', completionDate: '5th November 2023' },
    { claimNumber: 'CLM003', status: 'Denied', completionDate: '12th November 2023' },
  ];

  const handleChange = (e) => {
    setClaimNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedClaim = claims.find((claim) => claim.claimNumber === claimNumber);
    setClaimStatus(selectedClaim);
  };

  return (
    <>
      <Dashboardnav />
      <div className="claim-track-container">
        <h2>Track Claim Insurance</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="claimNumber">Claim Number:</label>
            <input
              type="text"
              id="claimNumber"
              name="claimNumber"
              value={claimNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">Track Status</button>
          </div>
        </form>
        {claimStatus && (
          <div className="claim-status">
            <h3>Claim Status:</h3>
            <table>
              <thead>
                <tr>
                  <th>Claim Number</th>
                  <th>Status</th>
                  <th>Estimated Completion Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{claimStatus.claimNumber}</td>
                  <td>{claimStatus.status}</td>
                  <td>{claimStatus.completionDate}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ClaimTrackStatus;
