import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Resetpwd.css';
const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleGetOTP = () => {
    console.log(`Get OTP clicked for email: ${email}`);
    setIsOtpSent(true);
  };

  const handleVerifyOTP = () => {
    console.log(`Verify OTP clicked for email: ${email}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Password reset submitted for email: ${email}`);
    window.location.href = '/login';
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  return (
    <div className="container">
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        {!isOtpSent && (
          <div className="input-container">
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleEmailChange} required />
        </div>
        )}
        {!isOtpSent && (
          <div className="button-container">
            <button type="button" className="get-otp-button" onClick={handleGetOTP}>
              Get OTP
            </button>
          </div>
        )}
        {
          isOtpSent && (
            <div className="label-container">
            <label>New Password:</label>
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
          )
        }
        {
          isOtpSent && (
             <div className="label-container">
          <label>Confirm Password:</label>
          <div className="input-container">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$"
              onChange={handleConfirmPasswordChange}
              required
            />
            <button
              type="button"
              className="toggle-password-button"
              onClick={handleToggleConfirmPassword}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
          )
        }

        {isOtpSent && (
          <div className="input-container">
            <label>Verify OTP:</label>
            <input type="text" value={otp} onChange={handleOtpChange} required />
            <button type="button" className="verify-otp-button" onClick={handleVerifyOTP}>
              GET OTP
            </button>
          </div>
        )}
        {isOtpSent && (
          <div className="button-container">
            <button type="submit" className="submit-button">
              SUBMIT
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ResetPasswordPage;
