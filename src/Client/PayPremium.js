import React, { useState } from 'react';
import './PayPremium.css';
import Dashboardnav from './Dashboardnav';
import Footer from '../Home/Footer';

const PayPremium = () => {
  const [premiumDetails, setPremiumDetails] = useState({
    policyNumber: '',
    companyName: '',
    premiumAmount: '',
    paymentMode: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPremiumDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Premium Paid Successfully');
    setPremiumDetails({
      policyNumber: '',
      companyName: '',
      premiumAmount: '',
      paymentMode: ''
    });
  };


  return (
    <>
      <Dashboardnav />
      <div className="paycontainer">
        <div>
          <h1>Pay Premium</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <strong>Policy Number</strong>
              <input
                type="text"
                name="policyNumber"
                value={premiumDetails.policyNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <strong>Company Name</strong>
              <input
                type="text"
                name="companyName"
                value={premiumDetails.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <strong>Premium Amount</strong>
              <input
                type="number"
                name="premiumAmount"
                value={premiumDetails.premiumAmount}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <strong>Payment Mode</strong>
              <select
                name="paymentMode"
                value={premiumDetails.paymentMode}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Net Banking">Net Banking</option>
              </select>
            </div>
              <div>
                <button type="submit" className='submitpay'>Pay</button>
              </div>
            </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PayPremium;
