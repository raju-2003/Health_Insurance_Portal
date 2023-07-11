import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Signup.css';
const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [userType, setUserType] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [companuName, setCompanyName] = useState('');
  const [employeeId, setEmployeeId] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    const selectedUserType = e.target.value;
    setUserType(selectedUserType);
    console.log(`Selected user type: ${selectedUserType}`);
  };

  const handleVerifyOTP = () => {
    console.log(`Verify OTP clicked for ${userType}`);
  };

  const handleSignUp = (e) => {
    if(userType === 'client') {
      const userDetails = {
        email,
        firstName,
        lastName,
        password,
        mobile,
        userType,
        aadhar,
      };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    } else {
      const userDetails = {
        email,
        firstName,
        lastName,
        password,
        mobile,
        userType,
        companyName: companuName,
        employeeId,
      };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    }

    e.preventDefault();
    window.location.href = "/";
    console.log('Sign up clicked');
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSignin = () => {
    window.location.href = "/login";
    console.log('Siin in clicked');
  };

  const handleaadharChange = (e) => {
    setAadhar(e.target.value);
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleEmployeeIdChange = (e) => {
    setEmployeeId(e.target.value);
  };





  return (
    <div className="container">
      <h1>Sign Up</h1>
      <div className="signin-container">
        <p>Already have an account?</p>
        <span className="signin-link" onClick={handleSignin}>
          Signin
        </span>
      </div>
      <form onSubmit={handleSignUp}>
        <div className="label-container">
          <label>Email:</label>
          <div className="input-container">
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
        </div>
        <div className="label-container">
          <label>First Name:</label>
          <div className="input-container">
            <input type="text" value={firstName} onChange={handleFirstNameChange} required />
          </div>
        </div>
        <div className="label-container">
          <label>Last Name:</label>
          <div className="input-container">
            <input type="text" value={lastName} onChange={handleLastNameChange} required />
          </div>
        </div>
        <div className="label-container">
          <label>Password:</label>
          <div className="input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$"
              required
            />
            <button
              type="button"
              className="toggle-password-button"
              onClick={handleTogglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <div className="label-container">
          <label>Mobile:</label>
          <div className="input-container">
            <input type="text" value={mobile} pattern="[1-9]{1}[0-9]{9}" onChange={handleMobileChange} required />
          </div>
        </div>
        <div className="label-container">
          <label>User Type:</label>
          <div className="input-container">
            <select value={userType} onChange={handleUserTypeChange}>
              <option value="">Select</option>
              <option value="client">Client</option>
              <option value="insurance">Insurance Provider</option>
            </select>
          </div>
        </div>

        {userType === 'client' && (
          <div className="label-container">
            <label>Aadhar no:</label>  
            <div className="input-container">
              <input type="text" value={aadhar} onChange={handleaadharChange} required />
            </div>
          </div>
        )}

        {userType === 'insurance' && (
          <div className="label-container">
            <label>Company Name:</label>
            <div className="input-container">
              <input type="text" value={companuName} onChange={handleCompanyNameChange} required />
            </div>
          </div>
        )}

        {userType === 'insurance' && (
          <div className="label-container">
            <label>Employee Id:</label>
            <div className="input-container">
              <input type="text" value={employeeId} onChange={handleEmployeeIdChange} required />
            </div>
          </div>
        )}

        <div className="label-container">
          <label>Verify OTP:</label>
          <input type="text" value={otp} onChange={handleOtpChange} required />
          <button type="button" className="verify-otp-button" onClick={handleVerifyOTP}>
            GET OTP
          </button>
        </div>
        <div className="button-container">
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
