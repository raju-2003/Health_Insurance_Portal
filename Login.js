import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('client');
  const [aadhar, setAadhar] = useState('');
  const [employeeid, setEmployeeid] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState('');
  
 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    const selectedUserType = e.target.value;
    setUserType(selectedUserType);
    console.log(`Selected user type: ${selectedUserType}`);
  };

  const handleGetOTP = () => {
    console.log(`Get OTP clicked for ${userType}`);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login clicked');
    window.location.href = "/";
  };

  const handleSignUp = () => {
    window.location.href = '/signup';
    console.log('Sign up clicked');
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleResetpwd = () => {
    window.location.href = '/reset-password';
  };
  
  const handleAadharChange = (e) => {
    setAadhar(e.target.value);
  };

  const handleEmployeeidchange = (e) => {
    setEmployeeid(e.target.value);
  };

  return (
            <div className="container">
            <h1>Login</h1>
            <div className="signup-container">
              <p>Don't have an account?</p>
              <span className="signup-link" onClick={handleSignUp}>
                Signup
              </span>
            </div>
            <form onSubmit={handleLogin}>
              <div className="label-container">
                <label>Email:</label>
                <div className="input-container">
                  <input type="email" value={email} onChange={handleEmailChange} required />
                </div>
              </div>
              <div className="label-container">
                <label>Password:</label>
                <div className="input-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$"
                    onChange={handlePasswordChange}
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
                <label>User Type:</label>
                <div className="input-container">
                  <select value={userType} onChange={handleUserTypeChange}>
                    <option value="client">Client</option>
                    <option value="admin">Admin</option>
                    <option value="insurance">Insurance Provider</option>
                  </select>
                </div>
              </div>

              {userType === 'insurance' && (
                <div className="label-container">
                  <label>Employee Id:</label>
                  <div className="input-container">
                    <input type="text" value={employeeid} onChange={handleEmployeeidchange} required />
                  </div>
                </div>
              )}

              {userType === 'client' && (
                <div className="label-container">
                  <label>Aadhar Number:</label>
                  <div className="input-container">
                    <input type="text" value={aadhar} onChange={handleAadharChange} required />
                  </div>
                </div>
              )}



              {userType !== 'admin' && (
              <div className="label-container">
                  <label><b>Verify OTP :</b></label>
                      <div className="otp-container">
                        <input type="text" value={otp} onChange={handleOtpChange} required />
                      </div>
                      <div className="otp-container">
                        <button type="button" className="get-otp-button" onClick={handleGetOTP}>
                        GET OTP
                        </button>
                      </div>
              </div>
              )}
              <div className="button-container">
                <button type="submit" className="login-button">
                  LOGIN
                </button>
              </div>

              <div className="pwd-container">
              <p>Forgot Password?</p>
              <span className="pwdup-link" onClick={handleResetpwd}>
                Reset Password
              </span>
            </div>

            </form>
          </div>

  );
};

export default LoginPage;
