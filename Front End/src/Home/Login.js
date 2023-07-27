import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('select');
  const [showPassword, setShowPassword] = useState(false);
  const [userid , setUserid] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleuserIdChange = (e) => {
    setUserid(e.target.value);
  };


  const handleUserTypeChange = (e) => {
    const selectedUserType = e.target.value;
    setUserType(selectedUserType);
  };

 

  async function handleLogin(e) {
    e.preventDefault();
    const userDetails = {
      email,
      password,
    };
    const loginDetails = {
      userid,
      email,
      userType,
      password,
    };
    if (userType === 'client') {
      let res = await axios.post('http://localhost:8080/user/authenticate', userDetails)
      if(res.data != null){
        const token = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
        console.log(loginDetails);
        console.log(token);
        window.alert("Login Successful");
        window.location.href = '/profile';

      }else{
        window.alert("Invalid Credentials");

      }
    } else if (userType === 'company') {
      let res = await axios.post('http://localhost:8080/user/authenticate', userDetails)
      if(res.data != null){
        const token = res.data;
        localStorage.setItem('token', token);
        setTimeout(() => {
          localStorage.removeItem('token');         
        }, 1000 * 60 * 60 * 24 * 7);
        localStorage.setItem('loginDetails', JSON.stringify(loginDetails));
        console.log(loginDetails);
        console.log(token);
        window.alert("Login Successful");
        window.location.href = '/company';

      }else{
        window.alert("Invalid Credentials");

      }
    } else if (userType === 'admin') {
      window.alert("Login Successful");
      window.location.href = '/admin';
    } else{
      window.alert("Please select user type");
    }
  };

  const handleSignUp = () => {
    window.location.href = '/signup';
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="loncontainer">
      <h1>Login</h1>
      <div className="lon-signup-container">
        <p>Don't have an account?</p>
        <span className="lon-signup-link" onClick={handleSignUp}>
          Signup
        </span>
      </div>
      <form onSubmit={handleLogin} className='lon-form'>
        <div className="lon-label-container">
          <label>User Type:</label>
          <div className="lon-input-container">
            <select value={userType} onChange={handleUserTypeChange}>
            <option value="select">Select</option>
              <option value="client">Client</option>
              <option value="company">Company</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
        <div className="lon-label-container">
          <label>Email:</label>
          <div className="lon-input-container">
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
        </div>
        <div className="lon-label-container">
          <label>User Id</label>
          <div className="lon-input-container">
            <input type="text" value={userid} onChange={handleuserIdChange} required />
          </div>
        </div>
        <div className="lon-label-container">
          <label>Password:</label>
          <div className="lon-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$"
              onChange={handlePasswordChange}
              required
            />
            <button
              type="button"
              onClick={handleTogglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <div className="lon-button-container">
          <button type="submit" className="lon-login-button">
            LOGIN
          </button>
        </div>
      </form>
    </div>

  );
};

export default LoginPage;
