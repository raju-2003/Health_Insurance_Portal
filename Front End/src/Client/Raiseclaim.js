import React, { useState } from 'react';
import './Raiseclaim.css';
import Dashboardnav from './Dashboardnav';
import Footer from '../Home/Footer';

const Raiseclaim = () => {
  const [claimDetails, setClaimDetails] = useState({
    claimId: '',
    policyNumber: '',
    claimType: '',
    claimAmount: '',
    claimDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClaimDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClaimDetails({
      claimId: '',
      policyNumber: '',
      claimType: '',
      claimAmount: '',
      claimDescription: '',
    });
  };

  return (
    <>
      <Dashboardnav />
      <div className="raisecontainer">
        <h2>Claim Insurance Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <strong>Claim ID:</strong>
            <input
              type="text"
              name="claimId"
              value={claimDetails.claimId}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <strong>Policy Number:</strong>
            <input
              type="text"
              name="policyNumber"
              value={claimDetails.policyNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <strong>Claim Type:</strong>
            <select
              name="claimType"
              value={claimDetails.claimType}
              onChange={handleChange}
            >
              <option value="">Select Claim Type</option>
              <option value="Medical">Medical</option>
              <option value="Accident">Accident</option>
              <option value="Hospitalization">Hospitalization</option>
            </select>
          </div>
          <div className="form-group">
            <strong>Claim Amount:</strong>
            <input
              type="number"
              name="claimAmount"
              value={claimDetails.claimAmount}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <strong>Claim Description:</strong>
            <textarea
              name="claimDescription"
              value={claimDetails.claimDescription}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">Submit Claim</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Raiseclaim;
